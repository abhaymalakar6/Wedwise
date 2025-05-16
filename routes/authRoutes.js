// routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Customer and Vendor Registration (same endpoint)
router.post('/register', register);

// Login
router.post('/login', login);

module.exports = router;
