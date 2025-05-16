const express = require('express');
const { getVendorProfile, updateVendorProfile } = require('../backend/controllers/vendorController');
const authMiddleware = require('../backend/middleware/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, getVendorProfile);
router.put('/profile', authMiddleware, updateVendorProfile);

module.exports = router;
