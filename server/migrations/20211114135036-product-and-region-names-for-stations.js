module.exports = {
  async up(db) {
    const products = await db.collection('product').find().toArray();
    const regions = await db.collection('region').find().toArray();

    for (const product of products) {
      for (const stationId of product.stations) {
        await db.collection('station').updateOne(
          { _id: stationId },
          { $set: { productName: product.name } },
        );
      }
    }

    for (const region of regions) {
      for (const stationId of region.stations) {
        await db.collection('station').updateOne(
          { _id: stationId },
          { $set: { regionName: region.name } },
        );
      }
    }
  },
};
