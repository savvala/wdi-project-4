const router = require('express').Router();
const cards  = require('../controllers/cards');
const auth  = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/cards')
  .get(cards.index)
  .post(secureRoute, cards.create);

router.route('/cards/:id')
  .get(cards.show)
  .put(secureRoute, cards.update)
  .delete(secureRoute, cards.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) => res.notFound());

module.exports = router;