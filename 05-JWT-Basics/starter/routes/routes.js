const {login, dashBoard} = require('../controllers/controllers.js');
const express = require('express');
const router = express.Router();

router.route('/dashboard').get(dashBoard);
router.route('/login').post(login);

module.exports = router;