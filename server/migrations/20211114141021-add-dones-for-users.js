module.exports = {
  async up(db) {
    const dones = await db.collection('done').find().toArray();

    const usersDones = [];
    for (const done of dones) {
      usersDones.push(done.stationId);
    }

    await db.collection('user').updateOne(
      {},
      { $set: { doneStations: usersDones } },
    );
  },
};
