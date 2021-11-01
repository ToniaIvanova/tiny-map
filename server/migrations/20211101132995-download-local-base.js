const fs = require('fs/promises');
// create server/downloaded-base/ before up
module.exports = { 
  async up (db) {
    const users = await db.collection("User").find({}).toArray();
    const products = await db.collection("Product").find({}).toArray();
    const stations = await db.collection("Station").find({}).toArray();
    const dones = await db.collection("DoneCount").find({}).toArray();

    await fs.writeFile("./downloaded-base/user.txt", JSON.stringify(users));
    await fs.writeFile("./downloaded-base/products.txt", JSON.stringify(products));
    await fs.writeFile("./downloaded-base/stations.txt", JSON.stringify(stations));
    await fs.writeFile("./downloaded-base/dones.txt", JSON.stringify(dones));
  }
};
