const express = require('express');
const ProductController = require('../../controllers/v1/ProductController');

const router = express.Router();
router.post('/create', ProductController.CreateProduct);
router.post('/delete', ProductController.DeleteProduct);
router.post('/get', ProductController.GetProducts);

module.exports = router;
