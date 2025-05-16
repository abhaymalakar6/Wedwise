const User = require('./User');

// Get vendor profile
const getVendorProfile = async (req, res) => {
  try {
    if (req.user.role !== 'vendor') {
      return res.status(403).json({ message: 'Access denied, not a vendor' });
    }

    const vendor = await User.findById(req.user.id).select('-password');
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    res.json(vendor);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update vendor profile
const updateVendorProfile = async (req, res) => {
  try {
    if (req.user.role !== 'vendor') {
      return res.status(403).json({ message: 'Access denied, not a vendor' });
    }

    const { fullName, phone, serviceType } = req.body;
    const vendor = await User.findById(req.user.id);
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    if (fullName) vendor.fullName = fullName;
    if (phone) vendor.phone = phone;
    if (serviceType) vendor.serviceType = serviceType;

    await vendor.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getVendorProfile, updateVendorProfile };
