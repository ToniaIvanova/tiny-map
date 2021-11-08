import mongoose from 'mongoose';

const RegionSchema = new mongoose.Schema({
  name: String,
  stations: [mongoose.Schema.ObjectId],
}, { versionKey: false });

const RegionModel = mongoose.model('Region', RegionSchema, 'region');

export default RegionModel;
