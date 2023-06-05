var express = require('express');
const indexController = require('../controllers/indexControllers');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);

router.get('/login', indexController.login);
router.post('/login',indexController.iniciarSesion)

router.get('/register',indexController.register);
router.post('/register',indexController.registroDatos)

router.post('/logout', indexController.logout)



module.exports = router;

