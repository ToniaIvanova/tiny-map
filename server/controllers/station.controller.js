import { stationFieldsValidation } from "../validation/station-fields.validation.js";
import { insertNewStation } from "../services/insert-new-station.service.js";
import { putDone } from "../services/put-done.service.js";
import {
  getStationsByProductId,
  getStationsByRegion,
  getStationDone,
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
  
  getStationsByRegion = async (req, res) => {
    const { productId, userId } = req.params;

    const stationsByProductId = await getStationsByRegion({ productId, userId });

    return res.send(stationsByProductId);
  }

  getStationDone = async (req, res) => {
    const { stationId, userId } = req.params;

    const stationDone = await getStationDone({ stationId, userId });

    return res.send({ stationDone });
  }

  putStationDone = async (req, res) => {
    const { stationId, userId } = req.params;
    const { done } = req.body;

    await putDone({ stationId, userId, done });
  
    return res.send({});
  }
}

export default new StationController();