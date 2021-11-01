const fs = require('fs/promises');
// create server/downloaded-base/ before up
module.exports = { 
  async up (db) {
    const users = JSON.parse(await fs.readFile("./downloaded-base/user.txt"));
    const products = JSON.parse(await fs.readFile("./downloaded-base/products.txt"));
    const stations = JSON.parse(await fs.readFile("./downloaded-base/stations.txt"));
    const dones = JSON.parse(await fs.readFile("./downloaded-base/dones.txt"));

    await db.collection('user').insert(users);
    await db.collection('product').insert(products);
    await db.collection('station').insert(stations);
    await db.collection('done').insert(dones);
  }
};
