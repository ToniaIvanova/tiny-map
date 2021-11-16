import UserModel from "../storage/models/user.model.js";

async function putDone({ stationId, userId, done }) {
  const user = await UserModel.findOne({ _id: userId });

  const doneIndex = user.doneStations.indexOf(stationId);
  if (doneIndex === -1 && done){
    user.doneStations.push(stationId);
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