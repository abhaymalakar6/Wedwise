const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  phone: String,
  category: String,
  city: String,
  // Add more fields as per your form
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
