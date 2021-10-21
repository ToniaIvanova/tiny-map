const ObjectId = require("mongodb").ObjectId;

class StationController {
  createStation = async (req, res) => {
    console.log('createStation doesn\'t work now.');
    // const stationData = req.body;
    // 
    // if (validation.stationFieldsValidation(stationData)){
    //   const stationId = await services.insertNewStation(req.app.locals, stationData, mongoClient);
    //   if (stationData.userName && stationData.doneCount) {
    //     await services.insertNewDoneCount(req.app.locals, stationData, mongoClient, stationId);
    //   }
    // }
  
    res.send({});
  }

  getStationsByProductId = async (req, res) => {
    const productId = ObjectId(req.params.productId);

    const stationCollection = req.app.locals.station;
    const station = await stationCollection.find({ productId }).toArray();

    res.send(station);
  }

  getStationDone = async (req, res) => {
    const stationId = ObjectId(req.params.stationId);
    const userId = ObjectId(req.params.userId);
    const doneCountCollection = req.app.locals.doneCount;
  
    const stationDone = await doneCountCollection.findOne({ userId, stationId });
      
    res.send({ stationDone });
  }

  putStationDone = async (req, res) => {
    console.log('putStationDone doesn\'t work now.');
    // const stationId = ObjectId(req.params.stationId);
    // const userId = ObjectId(req.params.userId);
    // const done = req.body.done;
    // const doneCountCollection = req.app.locals.doneCount;

    // let stationDone = await doneCountCollection.findOne({ userId, stationId });
    // if (!stationDone) {
    //   stationDone = await doneCountCollection.insert({ userId, stationId, done });
    // } else {
    //   stationDone = await doneCountCollection.update({ userId, stationId }, { done });
    // }
  
    res.send({});
  }
}

module.exports = new StationController();