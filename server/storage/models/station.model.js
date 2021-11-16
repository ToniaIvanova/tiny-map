import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  name: String,
  productId: mongoose.Schema.ObjectId,
  needCount: Number,
  regionId: mongoose.Schema.ObjectId,
  place: [Number],
  productName: String,
  regionName: String,
}, { versionKey: false });

const StationModel = mongoose.model('Station', StationSchema, 'station');

export default StationModel;
