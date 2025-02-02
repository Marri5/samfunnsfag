const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authValidation } = require('../middleware/validation');

router.post('/login', authValidation, authController.login);
router.post('/register', authValidation, authController.register);

module.exports = router;