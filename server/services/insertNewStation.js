const insertNewStation = async (collections, stationData, mongoClient) => {
  stationData.place = stationData.place.split(', ').map(coord => parseFloat(coord));

  const productCollection = collections.product;
  const stationCollection = collections.station;

  // insert new product if need
  const product = await productCollection.findOne({ name: stationData.productName });
  let productId;
  if (!product) {
    const newProduct = await mongoClient.db("products").collection("Product").insertOne({
      name: stationData.productName,
      stations: [],
    });  
    productId = newProduct.insertedId;
  } else {
    productId = product._id;
  }

  // insert new station if need
  const station = await stationCollection.findOne({ name: stationData.stationName });
  let stationId;
  if (!station) {
    const newStation = await mongoClient.db("products").collection("Station").insertOne({
      name: stationData.stationName,
      productId,
      place: stationData.place,
      needCount: stationData.needCount,
      region: stationData.region,
    });
    stationId = newStation.insertedId;
  } else {
    stationId = station._id;
  }

  // insert new station in product.stations list
  const productToUpdate = await productCollection.findOne({ _id: productId });
  const isStationInProduct = productToUpdate.stations.some(function(station) {
    return station.equals(stationId);
  })
  if (!isStationInProduct) {
    await mongoClient.db("products").collection("Product").updateOne({
      _id: productId,
    }, {
      $set: { stations: [ ...productToUpdate.stations, stationId ]}
    });
  }

  return stationId;
};

const insertNewDoneCount = async ({ collections, mongoClient, doneCount, stationId, userId }) => {
  const doneCountCollection = collections.doneCount;

  const doneCountDocument = await doneCountCollection.findOne({ userId, stationId });
  if (!doneCountDocument) {
    mongoClient.db("products").collection("DoneCount").insertOne({
      userId,
      stationId,
      doneCount,
      done: true,
    })
  } else {
    mongoClient.db("products").collection("DoneCount").updateOne({
      userId,
      stationId,
      doneCount,
      done: true,
    })
  }
};

module.exports = {
  insertNewStation,
  insertNewDoneCount,
}