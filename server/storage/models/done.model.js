import mongoose from 'mongoose';

const DoneSchema = new mongoose.Schema({
  _id: String,
  userId: String,
  stationId: String,
  done: Boolean,
}, { versionKey: false });

const DoneModel = mongoose.model('Done', DoneSchema, 'done');

export default DoneModel;
