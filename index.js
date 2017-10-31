const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));

const morgan = require('morgan');
const bodyParser = require('body-parser');
const { port, dbURI, env } = require('./config/environment');
const routes          = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler = require('./lib/errorHandler');

// test twillio here
// const twilio = require('twilio');
//
// const accountSid = 'AC4d8f03ada73bb62fa45f913b5427d4f5';
// const authToken = 'a8c4264081b654f665867f207d60d90f';
//
// const client = new twilio(accountSid, authToken);
//
// client.messages.create({
//   body: 'Hello from Node',
//   to: '+447818673734',  // Text this number
//   from: '+447481339063' // From a valid Twilio number
// })
//   .then((message) => console.log(message.sid));

mongoose.connect(dbURI, { useMongoClient: true });

if('test' !== env) app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use(customResponses);

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));

module.exports = app;
