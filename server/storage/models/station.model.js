import mongoose from 'mongoose';

const StationSchema = new mongoose.Schema({
  name: String,
  productId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
  },
  needCount: Number,
  regionId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Region',
  },
  place: [Number]
}, { versionKey: false });

const StationModel = mongoose.model('Station', StationSchema, 'station');

export default StationModel;
