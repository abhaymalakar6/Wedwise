const Booking = require('../models/Booking');
const User = require('./User');

// Book a vendor
const bookVendor = async (req, res) => {
  try {
    const { vendorId, serviceType, city, date } = req.body;

    const vendor = await User.findById(vendorId);
    if (!vendor || vendor.role !== 'vendor') {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    const booking = new Booking({
      customer: req.user.id,
      vendor: vendorId,
      serviceType,
      city,
      date,
    });

    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed', error: err.message });
  }
};

// View user bookings
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ customer: req.user.id }).populate('vendor', 'fullName serviceType');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

module.exports = { bookVendor, getUserBookings };
