const express = require('express');
const router = express.Router();
const StationController = require('../controllers/station.controller');

router.post('/',  StationController.createStation);
router.get('/product/:productId', StationController.getStationsByProductId);
router.get('/:stationId/:userId/done', StationController.getStationDone);
router.put('/:stationId/:userId/done', StationController.putStationDone);

module.exports = router;