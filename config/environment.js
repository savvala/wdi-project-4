const env = process.env.NODE_ENV || 'development';
const port  = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/project-4-${env}`;
const secret = process.env.AUTH_SECRET || 'hYgs^=?>@qrTfxLp';
const twilioRedirectURI = process.env.NODE_ENV === 'production' ? 'https://trade-contact.herokuapp.com/cards/' : 'http://localhost:8000/cards/';

module.exports = { port, dbURI, secret, env, twilioRedirectURI };
