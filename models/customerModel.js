const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  // add other fields as needed
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
