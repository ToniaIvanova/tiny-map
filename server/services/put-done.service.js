import mongoose from "mongoose";
import UserModel from "../storage/models/user.model.js";

async function putDone({ stationId, userId, done }) {
  const user = await UserModel.findOne({ _id: userId });
  const stationObjectId = mongoose.Types.ObjectId(stationId);

  const doneIndex = user.doneStations.indexOf(stationObjectId);
  if (doneIndex === -1 && done){
    user.doneStations.push(stationObjectId);
  };

  if (doneIndex !== -1 && !done){
    user.doneStations.splice(doneIndex, 1);
  }
  user.save();

  return {};
}

export {
  putDone,
}