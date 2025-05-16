const express = require('express');
const { makePayment } = require('../controllers/paymentController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, makePayment);

module.exports = router;
