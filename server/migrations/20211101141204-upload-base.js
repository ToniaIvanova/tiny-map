const fs = require('fs/promises');
const mongoose = require('mongoose');
// create server/downloaded-base/ before up
module.exports = { 
  async up (db) {
    const users = JSON.parse(await fs.readFile("./downloaded-base/user.txt"));
    const products = JSON.parse(await fs.readFile("./downloaded-base/products.txt"));
    const stations = JSON.parse(await fs.readFile("./downloaded-base/stations.txt"));
    const dones = JSON.parse(await fs.readFile("./downloaded-base/dones.txt"));

    for (let user of users) {
      user._id = mongoose.Types.ObjectId(user._id);
    };

    for (let station of stations) {
      station._id = mongoose.Types.ObjectId(station._id);
      station.productId = mongoose.Types.ObjectId(station.productId);
    };

    for (let done of dones) {
      done._id = mongoose.Types.ObjectId(done._id);
      done.userId = mongoose.Types.ObjectId(done.userId);      
      done.stationId = mongoose.Types.ObjectId(done.stationId);
    };

    for (let product of products) {
      product._id = mongoose.Types.ObjectId(product._id);
      const len = product.stations.length;
      for (let i = 0; i < len; i += 1){
        product.stations[i] = mongoose.Types.ObjectId(product.stations[i]);
      }
    };

    await db.collection('user').insertMany(users);
    await db.collection('product').insertMany(products);
    await db.collection('station').insertMany(stations);
    await db.collection('done').insertMany(dones);
  }
};
