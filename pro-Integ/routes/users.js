var express = require('express');
const userController = require('../controllers/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/profile', userController.profile);

router.get('/profile-edit', userController.profileEdit);

module.exports = router;
