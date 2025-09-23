const {login, dashBoard} = require('../controllers/controllers.js');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.js');

router.route('/dashboard').get(authMiddleware, dashBoard);
router.route('/login').post(login);

module.exports = router;