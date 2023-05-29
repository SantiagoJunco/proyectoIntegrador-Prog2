var express = require('express');
const productController = require('../controllers/productsControllers');
var router = express.Router();

router.get('/id/:id', productController.product);

router.get('/detalle', productController.detalle);

router.get('/agregarProducto',productController.agregarProducto);

module.exports = router