const User = require('./User');
const Booking = require('../models/Booking');

const makePayment = async (req, res) => {
  try {
    const { bookingId, amount, method } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    const payment = new Payment({ booking: bookingId, amount, method });
    await payment.save();

    res.status(201).json({ message: 'Payment successful', payment });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err.message });
  }
};

module.exports = { makePayment };
