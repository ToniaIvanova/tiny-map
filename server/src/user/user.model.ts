import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    passwordHash: String,
    doneStations: [mongoose.Schema.Types.ObjectId],
    isAdmin: Boolean,
    access_token: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    collection: 'user',
  },
);
