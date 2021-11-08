import { Router } from 'express';
import RegionController from '../controllers/region.controller.js';

const router = Router();

router.get('/', RegionController.getAllRegions);

export default router;