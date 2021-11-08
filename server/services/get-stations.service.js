import StationModel from "../storage/models/station.model.js";
import DoneModel from "../storage/models/done.model.js";
import ProductModel from "../storage/models/product.model.js";
import RegionModel from "../storage/models/region.model.js";

async function getPopulatedStationsByProduct(productId) {
  return ProductModel.findOne({ _id: productId }).populate('stations');
}

const getStationsByProductId = async ({ productId, userId }) => {
  const product = await ProductModel.findOne({ _id: productId });
  const stationsData = (await getPopulatedStationsByProduct(productId)).stations;

  const stationsPrepared = [];
  for (const station of stationsData) {
    const region = await RegionModel.findOne({ _id: station.regionId });
    if (!region) {
      console.log({ station, product });
    }

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
      region: region.name,
    })
  };

  return stationsPrepared;
};

async function getPopulatedStationsByRegion(regionId) {
  return RegionModel.findOne({ _id: regionId }).populate('stations');
}

const getStationsByRegionId = async ({ regionId, userId }) => {
  const region = await RegionModel.findOne({ _id: regionId });
  const stationsData = (await getPopulatedStationsByRegion(regionId)).stations;

  const stationsPrepared = [];
  for (const station of stationsData) {
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
      region: region.name,
    })
  };
  
  return stationsPrepared;
};

const getStationDone = async ({ userId, stationId }) => {
  return DoneModel.findOne({ userId, stationId });
}

export {
  getStationsByProductId,
  getStationsByRegionId,
  getStationDone,
};