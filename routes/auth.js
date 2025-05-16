import express from 'express';
import {
  registerCustomer,
  registerVendor,
  loginUser
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register-customer', registerCustomer);
router.post('/register-vendor', registerVendor);
router.post('/login', loginUser);

export default router;
