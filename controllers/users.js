const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .populate('collected cards')
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.currentUser.id)
    .populate('collected')
    .exec()
    .then(user => {
      if(!user) return res.notFound();
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  show: usersShow,
  index: usersIndex
};
