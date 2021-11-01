import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const DoneSchema = new Schema({
  userId: ObjectId,
  stationId: ObjectId,
  done: Boolean,
  doneCount: Number
}, { versionKey: false });

const DoneModel = mongoose.model('Done', DoneSchema, 'DoneCount');

export default DoneModel;
