import mongoose from 'mongoose';

const RegionSchema = new mongoose.Schema({
  name: String,
  stations: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Station',
  }],
}, { versionKey: false });

const RegionModel = mongoose.model('Region', RegionSchema, 'region');

export default RegionModel;
