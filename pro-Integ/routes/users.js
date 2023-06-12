var express = require('express');
const userController = require('../controllers/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/profile/id/:id', userController.profile);

router.get('/profile-edit/id/:id', userController.profileEdit);

router.get('/searchResultsUsuarios', userController.searchResultsUsuarios);

module.exports = router;
