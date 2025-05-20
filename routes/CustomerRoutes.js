const express = require('express');
const router = express.Router();
const Customer = require('../models/customerModel');

// routes/customerRoutes.js
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // You can add validation here

    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return res.status(400).send('Email already registered');
    }

    const customer = new Customer({ name, email, password });
    await customer.save();

    res.status(200).json({ message: 'Email registered successfully!' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send('Internal Server Error');
  }
});


module.exports = router;
// POST /api/customers/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ email });

    if (!customer || customer.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', customer });
  } catch (error) {
    console.error('Customer login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

