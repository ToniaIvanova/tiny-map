import { Router } from 'express';
const router = Router();
import ProductController from '../controllers/product.controller.js';

router.get('/', ProductController.getAllProducts);
router.get('/:productIds', ProductController.getProductsByIds);

export default router;