import * as mongoose from 'mongoose';

export const StationSchema = new mongoose.Schema(
  {
    name: String,
    productId: mongoose.Schema.Types.ObjectId,
    needCount: Number,
    regionId: mongoose.Schema.Types.ObjectId,
    place: [Number],
    productName: String,
    regionName: String,
  },
  {
    versionKey: false,
    collection: 'station',
  },
);
