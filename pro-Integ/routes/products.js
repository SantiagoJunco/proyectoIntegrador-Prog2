var express = require('express');
const productController = require('../controllers/productsControllers');
var router = express.Router();

router.get('/', productController.product);

router.get('/detalle', productController.detalle);

router.get('/agregarProducto',productController.agregarProducto);

module.exports = router