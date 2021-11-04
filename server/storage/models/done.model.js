import mongoose from 'mongoose';

const DoneSchema = new mongoose.Schema({
  userId: mongoose.Schema.ObjectId,
  stationId: mongoose.Schema.ObjectId,
  done: Boolean,
}, { versionKey: false });

const DoneModel = mongoose.model('Done', DoneSchema, 'done');

export default DoneModel;
