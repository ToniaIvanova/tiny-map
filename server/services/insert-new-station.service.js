import ProductModel from "../storage/models/product.model.js";
import StationModel from "../storage/models/station.model.js";

const insertProduct = async productName => {
  const product = await ProductModel.findOne({ name: productName });
  let productId;
  if (!product) {
    const newProduct = new ProductModel({
      name: productName,
      stations: [],
    });
    newProduct.save();

    productId = newProduct._id;
  } else {
    productId = product._id;
  }

  return productId;
};

const insertStation = async ({ stationData, productId }) => {
  const station = await StationModel.findOne({ name: stationData.stationName });
  let stationId;
  if (!station) {
    const newStation = new StationModel({
      name: stationData.stationName,
      productId,
      place: stationData.place,
      needCount: stationData.needCount,
      region: stationData.region,
    });
    newStation.save();
    stationId = newStation._id;
  } else {
    stationId = station._id;
  };

  return stationId;
};

const insertStationIdInProduct = async ({ productId, stationId }) => {
  const productToUpdate = await ProductModel.findOne({ _id: productId });
  const isStationIdInProduct = productToUpdate.stations.some(function(station) {
    return station.equals(stationId);
  })
  if (!isStationIdInProduct) {
    await ProductModel.updateOne({
      _id: productId,
    }, {
      $set: { stations: [ ...productToUpdate.stations, stationId ]}
    });
  }
};

const insertNewStation = async stationData => {
  stationData.place = stationData.place.split(', ').map(coord => parseFloat(coord));

  // insert new product if need
  const productId = await insertProduct(stationData.productName);

  // insert new station if need
  const stationId = await insertStation({ stationData, productId });

  // insert new station in product.stations list
  await insertStationIdInProduct({ productId, stationId });
  
  return stationId;
};

export {
  insertNewStation,
}