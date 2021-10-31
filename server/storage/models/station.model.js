import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const StationSchema = new Schema({
  name: String,
  productId: ObjectId,
  needCount: Number,
  region: String,
  place: [Number]
});

const StationModel = mongoose.model('Station', StationSchema, 'Station');

export default StationModel;
