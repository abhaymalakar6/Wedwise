import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  businessName: String,
  serviceType: String
});

export default mongoose.model('Vendor', vendorSchema);
