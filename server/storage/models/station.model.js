import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  name: String,
  productId: mongoose.Schema.ObjectId,
  needCount: Number,
  region: String,
  place: [Number]
}, { versionKey: false });

const StationModel = mongoose.model('Station', StationSchema, 'station');

export default StationModel;
