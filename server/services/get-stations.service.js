import StationModel from "../storage/models/station.model.js";
import DoneModel from "../storage/models/done.model.js";
import ProductModel from "../storage/models/product.model.js";

const getStationsByProductId = async ({ productId, userId }) => {
  const stationsData = await StationModel.find({ productId });
  const product = await ProductModel.findOne({ _id: productId });

  let stationsPrepared = [];
  for (let station of stationsData) {
    const stationDone = await getStationDone({ userId, stationId: station._id });
    const done = stationDone ? stationDone.done : false;

    stationsPrepared.push({
      stationId: station._id,
      key: station._id,
      productName: product.name,
      stationName: station.name,
      place: station.place,
      needCount: station.needCount,
      done,
      region: station.region,
    })
  };

  return stationsPrepared;
};

const getStationsByRegion = async ({ region, userId }) => {
  const stationsData = await StationModel.find({ region });

  let stationsPrepared = [];
  for (let station of stationsData) {
    const product = await ProductModel.findOne({ _id: station.productId });

    const stationDone = await getStationDone({ userId, stationId: station._id });
    const done = stationDone ? stationDone.done : false;

    stationsPrepared.push({
      stationId: station._id,
      key: station._id,
      productName: product.name,
      stationName: station.name,
      place: station.place,
      needCount: station.needCount,
      done,
      region,
    })
  };
  
  return stationsPrepared;
};

const getStationDone = async ({ userId, stationId }) => {
  return DoneModel.findOne({ userId, stationId });
}

export {
  getStationsByProductId,
  getStationsByRegion,
  getStationDone,
};