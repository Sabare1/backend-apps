const { getAllProductsStatic, getAllProducts, getProduct } = require('../controllers/controller.js');
const express = require('express')
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/test/static').get(getAllProductsStatic);
router.route('/:id').get(getProduct);

module.exports = router