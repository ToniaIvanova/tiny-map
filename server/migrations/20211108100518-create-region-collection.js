module.exports = {
  async up(db) {
    const stations = await db.collection('station').find().toArray();

    const allRegions = stations.reduce(function(regions, currentStation) {
      if (!regions[currentStation.region]) {
        regions[currentStation.region] = [];
      }
      regions[currentStation.region].push(currentStation._id);
      return regions;
    }, {});

    for (let region in allRegions) {
      const regionId = (await db.collection('region').insertOne({
        name: region,
        stations: allRegions[region],
      })).insertedId;

      await db.collection('station').updateMany(
        { region },
        { $set: { regionId }, $unset: { region } },
      );
    }
  },
};
