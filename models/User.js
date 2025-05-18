const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: ["customer", "vendor"],
    required: true
  },
  name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  password: { type: String, required: true },
  businessName: String,
  city: String,
});

module.exports = mongoose.model("User", userSchema);
