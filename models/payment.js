const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: true,
  },
  amount: Number,
  method: {
    type: String, // UPI, Card, Barcode
    enum: ['UPI', 'Card', 'Barcode'],
  },
  status: {
    type: String,
    enum: ['paid', 'pending'],
    default: 'paid',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Payment', paymentSchema);
