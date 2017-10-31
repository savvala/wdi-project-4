const Card = require('../models/card');
const User = require('../models/user');

function cardsIndex(req, res, next) {
  Card
    .find()
    .exec()
    .then(cards => res.json(cards))
    .catch(next);
}

function cardsCreate(req, res, next) {
  req.body.user = req.currentUser;

  Card
    .create(req.body)
    .then(card => res.status(201).json(card))
    .catch(next);
}

function cardsShow(req, res, next) {
  Card
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then((card) => {
      if(!card) return res.notFound();
      res.json(card);
    })
    .catch(next);
}

function cardsUpdate(req, res, next) {
  Card
    .findById(req.params.id)
    .exec()
    .then((card) => {
      if(!card) return res.notFound();
      card = Object.assign(card, req.body);
      return card.save();
    })
    .then(card => res.json(card))
    .catch(next);
}

function cardsDelete(req, res, next) {
  Card
    .findById(req.params.id)
    .exec()
    .then((card) => {
      if(!card) return res.notFound();
      return card.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function cardsTrade(req, res, next) {
  const currentUsersCard = req.currentUser.cards[0];
  // find the cards user and add the currently logged in user's card into their array
  Card
    .findById(req.params.id)
    .populate('user')
    .exec()
    .then(card => {
      if(!card) return res.notFound();

      // if the card's user already has your card in their collection, return false (don't add it again)
      if (card.user.collected.find(card => card.toString() === currentUsersCard.id)) return false;
      card.user.collected.push(currentUsersCard);
      return card.user.save();
    })
    .then(() => {
      return User
        .findById(req.currentUser.id);
    })
    .then((user) => {
      if(!user) return res.notFound();
      // push the card if from the URL params into the user's collected array and then save the user
      user.collected.push(req.params.id);
      return user.save();
    })
    .then(user => {
      // we need to populate the collected array after updating the user so that the view updates accordingly
      return User.populate(user, { path: 'collected' });
    })
    .then((user) => {
      // at this point you need to update the other user
      res.json(user);
    })
    .catch(next);
}

function cardsRemove(req, res, next) {
  User
    .findById(req.currentUser.id)
    .exec()
    .then((user) => {
      if(!user) return res.notFound();
      // find the position of the card in the user's collected array
      const index = user.collected.indexOf(req.params.id);
      // splice one element out of the array from that index
      user.collected.splice(index, 1);
      return user.save();
    })
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  index: cardsIndex,
  create: cardsCreate,
  show: cardsShow,
  update: cardsUpdate,
  delete: cardsDelete,
  trade: cardsTrade,
  remove: cardsRemove
};
