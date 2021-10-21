const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

router.get('/', ProductController.getAllProducts);
router.get('/:productIds', ProductController.getProductsByIds);

module.exports = router;