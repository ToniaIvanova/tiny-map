import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  _id: String,
  name: String,
}, { versionKey: false });

const UserModel = mongoose.model('User', UserSchema, 'user');

export default UserModel;
