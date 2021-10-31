import { Router } from 'express';
const router = Router();
import StationController from '../controllers/station.controller.js';

router.post('/', StationController.createStation);
router.get('/product/:productId', StationController.getStationsByProductId);
router.get('/:stationId/:userId/done', StationController.getStationDone);
router.put('/:stationId/:userId/done', StationController.putStationDone);

export default router;