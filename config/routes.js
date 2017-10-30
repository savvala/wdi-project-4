const router = require('express').Router();
const cards  = require('../controllers/cards');
const auth  = require('../controllers/auth');
const users  = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/cards')
  .get(secureRoute, cards.index)
  .post(secureRoute, cards.create);

router.route('/cards/:id')
  .get(cards.show)
  .put(secureRoute, cards.update)
  .delete(secureRoute, cards.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/profile')
  .get(secureRoute, users.show);

router.route('/cards/:id/trade')
  .get(secureRoute, cards.trade)
  .delete(secureRoute, cards.remove);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
