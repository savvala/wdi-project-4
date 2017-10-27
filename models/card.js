const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  image: { type: String },
  fullName: { type: String, required: 'Your full name is required' },
  jobTitle: { type: String, required: 'Your job title is required' },
  business: { type: String },
  businessAddress: { type: String },
  phoneNumber: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Card', cardSchema);
