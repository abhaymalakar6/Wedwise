import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String // 'vendor' or 'customer'
});

export default mongoose.model('User', userSchema);
