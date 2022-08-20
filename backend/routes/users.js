const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { urlRegex } = require('../utils/config');

const {
  getUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

router.get('/me', getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), updateUser);

router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(urlRegex),
  }),
}), updateAvatar);

module.exports = router;
