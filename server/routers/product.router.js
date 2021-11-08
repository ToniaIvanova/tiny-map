import { Router } from 'express';
import ProductController from '../controllers/product.controller.js';

const router = Router();

router.get('/', ProductController.getAllProducts);
router.get('/:productIds', ProductController.getProductsByIds);

export default router;