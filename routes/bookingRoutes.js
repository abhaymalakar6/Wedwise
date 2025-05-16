const express = require('express');
const { bookVendor, getUserBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, bookVendor);
router.get('/', authMiddleware, getUserBookings);

module.exports = router;
