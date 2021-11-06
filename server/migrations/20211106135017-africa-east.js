const mongoose = require('mongoose');
const productsFromHell = require('../downloaded-base/products');

module.exports = {
  async up(db) {

    for (let product of productsFromHell) {
      const productInCollection = await db.collection('product').findOne({ name: product.name });
      const productId = productInCollection ? productInCollection._id : new mongoose.Types.ObjectId();
      const productStationsInCollection = productInCollection ? productInCollection.stations : null;

      let stationsIdsForProduct = [];
      for (let station of product.stations) {
        if (station.region === "Африка_Запад") {
          const stationInCollection = await db.collection('station').findOne({
            name: station.name,
            region: "Африка Запад",
          });

          if (!stationInCollection) {
            const stationId = new mongoose.Types.ObjectId();
            stationsIdsForProduct.push(stationId);

            await db.collection('station').insertOne({
              _id: stationId,
              name: station.name,
              productId,
              needCount: station.needCount,
              region: "Африка Запад",
              place: station.place,
            });
          }
        }
      }
      if (productStationsInCollection) {
        await db.collection('product').updateOne(
          { _id: productId },
          {
            $set: { stations: productStationsInCollection.concat(stationsIdsForProduct)}
          }
        );
      } else if (stationsIdsForProduct){
        await db.collection('product').insertOne({
          _id: productId,
          name: product.name,
          stations: stationsIdsForProduct,
        });
      }
    }
  },
};
