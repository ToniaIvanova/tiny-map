import * as mongoose from 'mongoose';

export const RegionSchema = new mongoose.Schema(
  {
    name: String,
    stations: [mongoose.Schema.Types.ObjectId],
  },
  {
    versionKey: false,
    collection: 'region',
  },
);
