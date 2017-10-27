const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Card      = require('../models/card');

const cardData = [{
  image: '',
  fullName: 'Savva Lambin',
  jobTitle: 'Junior Developer',
  business: 'General Assembly',
  businessAdress: 'The Relay Building, 114 Whitechapel High St, London E1 7PT',
  phoneNumber: '07878787878'
}];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Card.create(cardData))
  .then(cards => console.log(`${cards.length} cards created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
