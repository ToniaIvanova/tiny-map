import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: String,
    stations: [mongoose.Schema.Types.ObjectId],
  },
  {
    versionKey: false,
    collection: 'product',
  },
);
