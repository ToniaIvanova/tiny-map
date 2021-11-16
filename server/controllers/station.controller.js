import { stationFieldsValidation } from "../validation/station-fields.validation.js";
import { insertNewStation } from "../services/insert-new-station.service.js";
import { putDone } from "../services/put-done.service.js";
import {
  getStationsByProductId,
  getStationsByRegionId,
} from "../services/get-stations.service.js";

class StationController {
  createStation = async (req, res) => {
    const stationData = req.body;

    await stationFieldsValidation(stationData);

    const stationId = await insertNewStation(stationData);
    if (stationData.userId && stationData.done) {
      await putDone({ stationId, userId: stationData.userId, done: stationData.done });
    }
  
    return res.send({});
  }

  getStationsByProductId = async (req, res) => {
    const { productId, userId } = req.params;

    const stationsByProductId = await getStationsByProductId({ productId, userId });

    return res.send(stationsByProductId);
  }
  
  getStationsByRegionId = async (req, res) => {
    const { regionId, userId } = req.params;

    const stationsByRegionId = await getStationsByRegionId({ regionId, userId });

    return res.send(stationsByRegionId);
  }

  putStationDone = async (req, res) => {
    const { stationId, userId } = req.params;
    const { done } = req.body;

    await putDone({ stationId, userId, done });

    return res.send({});
  }
}

export default new StationController();