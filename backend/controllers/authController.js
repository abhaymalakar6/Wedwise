import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Customer from '../models/Customer.js';
import Vendor from '../models/Vendor.js';

// Register Customer
export const registerCustomer = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const exists = await Customer.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Customer already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = new Customer({ name, email, password: hashedPassword });

    await customer.save();
    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Register Vendor
export const registerVendor = async (req, res) => {
  const { name, email, password, businessName, serviceType } = req.body;

  try {
    const exists = await Vendor.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Vendor already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const vendor = new Vendor({ name, email, password: hashedPassword, businessName, serviceType });

    await vendor.save();
    res.status(201).json({ message: 'Vendor registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Shared Login
export const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const model = role === 'vendor' ? Vendor : Customer;
    const user = await model.findOne({ email });

    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
