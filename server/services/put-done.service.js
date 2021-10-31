import DoneModel from "../storage/models/done.model.js";

async function putDone({ stationId, userId, done }) {
  const stationDone = await DoneModel.findOne({ userId, stationId });

  if (!stationDone) {
    const newStationDone = new DoneModel({
      userId,
      stationId,
      done,
    });
    newStationDone.save();
  } else {
    await DoneModel.updateOne({ userId, stationId }, { done });
  }

  return {};
}

export {
  putDone,
}