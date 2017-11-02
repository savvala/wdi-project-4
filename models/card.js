const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  image: { type: String },
  fullName: { type: String, required: 'Your full name is required' },
  jobTitle: { type: String, required: 'Your job title is required' },
  business: { type: String },
  email: { type: String },
  businessAddress: { type: String },
  phoneNumber: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  fontStyle: {type: String},
  fontColour: {type: String},
  cardColour: {type: String},
  twitter: {type: String},
  linkedIn: {type: String},
  twitterColour: {type: String},
  linkedInColour: {type: String}
});

module.exports = mongoose.model('Card', cardSchema);
