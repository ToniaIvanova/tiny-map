import { Router } from 'express';
const router = Router();
import StationController from '../controllers/station.controller.js';

router.post('/', StationController.createStation);
router.get('/product/:productId/:userId', StationController.getStationsByProductId);
router.get('/region/:region/:userId', StationController.getStationsByRegion);
router.get('/:stationId/:userId/done', StationController.getStationDone);
router.put('/:stationId/:userId/done', StationController.putStationDone);

export default router;