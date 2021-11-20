import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    passwordHash: String,
    doneStations: [mongoose.Schema.Types.ObjectId],
  },
  {
    versionKey: false,
    collection: 'user',
  },
);
