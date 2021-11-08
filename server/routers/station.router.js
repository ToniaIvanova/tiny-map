import { Router } from 'express';
import StationController from '../controllers/station.controller.js';

const router = Router();

router.post('/', StationController.createStation);
router.get('/product/:productId/:userId', StationController.getStationsByProductId);
router.get('/region/:regionId/:userId', StationController.getStationsByRegionId);
router.get('/:stationId/:userId/done', StationController.getStationDone);
router.put('/:stationId/:userId/done', StationController.putStationDone);

export default router;