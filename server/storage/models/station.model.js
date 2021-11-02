import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  _id: String,
  name: String,
  productId: String,
  needCount: Number,
  region: String,
  place: [Number]
}, { versionKey: false });

const StationModel = mongoose.model('Station', StationSchema, 'station');

export default StationModel;
