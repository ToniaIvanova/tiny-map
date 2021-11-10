import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  passwordHash: String,
}, { versionKey: false });

const UserModel = mongoose.model('User', UserSchema, 'user');

export default UserModel;
