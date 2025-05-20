// In Routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const Vendor = require('../Models/vendorModel'); // adjust path as needed

router.post('/register', async (req, res) => {
  try {
    const existingVendor = await Vendor.findOne({ email: req.body.email });
    if (existingVendor) return res.status(400).json({ message: 'Vendor already exists' });

    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (error) {
    console.error('Vendor registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
