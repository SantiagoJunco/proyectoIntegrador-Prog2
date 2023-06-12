var express = require('express');
const productController = require('../controllers/productsControllers');
var router = express.Router();

router.get('/id/:id', productController.product);
router.post('/id/:id',productController.agregarComentario);

router.get('/searchResults', productController.searchResults);

router.get('/agregarProducto',productController.agregarProducto);
router.post('/agregarProducto',productController.crearProducto);

router.post('/eliminarProducto/id/:id',productController.eliminarProducto);

router.get('/editarProducto/id/:id',productController.editarProductoGET);
router.post('/editarProducto/id/:id',productController.editarProductoPOST);

module.exports = router