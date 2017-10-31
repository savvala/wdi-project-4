const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID ;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = new twilio(accountSid, authToken);

function sendMessage(req, res, next) {

  client.messages.create({
    body: `${req.currentUser.cards[0].fullName} wants to trade cards! Click here: http://localhost:8000/cards/${req.currentUser.cards[0].id} 💵`,
    to: req.body.to,  // Text this number
    from: '+447481339063' // From a valid Twilio number
  })
    .then((message) => console.log(message.sid))
    .then(() => res.status(200).end())
    .catch(next);
}

module.exports = {send: sendMessage};
