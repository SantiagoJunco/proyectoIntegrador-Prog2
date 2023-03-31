var express = require('express');
const indexController = require('../controllers/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

router.get('/headerlogueado', indexController.headerLogueado);

router.get('/login', indexController.login);

router.get('/register',indexController.register);

module.exports = router;
