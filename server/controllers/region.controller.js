import RegionModel from "../storage/models/region.model.js";

class RegionController {
  getAllRegions = async (req, res) => {
    const regions = await RegionModel.find({});

    return res.send(regions);
  }
}

export default new RegionController();