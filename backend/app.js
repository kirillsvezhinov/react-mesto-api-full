require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { celebrate, Joi, errors } = require('celebrate');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

const { PORT = 3000, MONGO_URI = 'mongodb://localhost:27017/mydatabase' } = process.env;
const NotFoundError = require('./errors/not-found-err');
const { STATUS_CODE_OK, STATUS_CODE_INTERNAL_SERVER_ERROR } = require('./utils/statusCodes');
const { login } = require('./controllers/login');
const { logout } = require('./controllers/logout');
const { createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // за 15 минут
  max: 100, // можно совершить максимум 100 запросов с одного IP
});

app.use(limiter);

app.use(helmet());

app.use(cookieParser());

mongoose.connect(MONGO_URI.toString());
mongoose.set('strictQuery', false);

app.use(express.json());

app.use(requestLogger);

app.use(cors);

// Чтобы на ревью смогли протестировать автоматическое восстановление приложения после падения
// После ревью удалить
app.get('/api/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/api/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

app.post('/api/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), createUser);

app.get('/api/auth', auth, (req, res, next) => {
  try {
    res.sendStatus(STATUS_CODE_OK);
  } catch (err) {
    next(err);
  }
});

app.get('/api/signout', logout);

app.use(auth);

app.use('/api/users', require('./routes/users'));

app.use('/api/cards', require('./routes/cards'));

app.use('*', (req, res, next) => next(new NotFoundError('404 Not Found')));

app.use(errorLogger);

app.use(errors());

app.use((err, req, res, next) => {
  const { statusCode = STATUS_CODE_INTERNAL_SERVER_ERROR, message } = err;

  console.log('ОШИБКА: ', err.name, err.message);

  res
    .status(statusCode)
    .send({
      message: statusCode === STATUS_CODE_INTERNAL_SERVER_ERROR
        ? 'На сервере произошла ошибка'
        : message,
    });

  next();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${PORT}`);
});
