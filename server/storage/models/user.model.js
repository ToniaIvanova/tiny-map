import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
});

const UserModel = mongoose.model('User', UserSchema, 'User');

export default UserModel;
