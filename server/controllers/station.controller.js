import StationModel from "../storage/models/station.model.js";
import DoneModel from "../storage/models/done.model.js";
import { stationFieldsValidation } from "../validation/station-fields.validation.js";
import { insertNewStation } from "../services/insert-new-station.service.js";
import { putDone } from "../services/put-done.service.js";

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
    const { productId } = req.params;

    const stationsByProductId = await StationModel.find({ productId });

    return res.send(stationsByProductId);
  }

  getStationDone = async (req, res) => {
    const { stationId, userId } = req.params;

    const stationDone = await DoneModel.findOne({ userId, stationId });

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