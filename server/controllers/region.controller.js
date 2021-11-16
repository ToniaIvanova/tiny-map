import RegionModel from "../storage/models/region.model.js";

class RegionController {
  getAllRegions = async (req, res) => {
    const regions = await RegionModel.aggregate([
      { $project: { stations: 0 } },
      { $sort: { name: 1 } }
    ]);

    return res.send(regions);
  }
}

export default new RegionController();