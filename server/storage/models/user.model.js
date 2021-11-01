import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
}, { versionKey: false });

const UserModel = mongoose.model('User', UserSchema, 'User');

export default UserModel;
