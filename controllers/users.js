const User = require('../models/user');

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
  show: usersShow
};
