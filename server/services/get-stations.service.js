import StationModel from "../storage/models/station.model.js";
import UserModel from "../storage/models/user.model.js";

const getStationsPrepared = async ({ stationsData, userId }) => {
  const user = await UserModel.findOne({ _id: userId });
  const userDoneStations = user.doneStations;

  const stationsPrepared = [];
  for (const station of stationsData) {
    const done = userDoneStations.includes(station._id);

    stationsPrepared.push({
      stationId: station._id,
      key: station._id,
      productName: station.productName,
      stationName: station.name,
      place: station.place,
      needCount: station.needCount,
      done,
      region: station.regionName,
    })
  };

  return stationsPrepared;
}

const getStationsByProductId = async ({ productId, userId }) => {
  const stationsData = await StationModel.find({ productId });

  const stationsPrepared = await getStationsPrepared({ stationsData, userId });

  return stationsPrepared;
};

const getStationsByRegionId = async ({ regionId, userId }) => {
  const stationsData = await StationModel.find({ regionId });

  const stationsPrepared = await getStationsPrepared({ stationsData, userId });
  
  return stationsPrepared;
};

export {
  getStationsByProductId,
  getStationsByRegionId,
};