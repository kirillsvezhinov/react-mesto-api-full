module.exports.logout = (req, res, next) => {
  try {
    res.clearCookie('jwt');
    res.send({
      message: 'Успешный выход из аккаунта',
    });
  } catch (err) {
    next(err);
  }
};
