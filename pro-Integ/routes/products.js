var express = require('express');
const productController = require('../controllers/productsControllers');
var router = express.Router();

router.get('/id/:id', productController.product);
router.post('/id/:id',productController.agregarComentario);

router.get('/searchResults', productController.searchResults);

router.get('/agregarProducto',productController.agregarProducto);
router.post('/agregarProducto',productController.crearProducto);

module.exports = router