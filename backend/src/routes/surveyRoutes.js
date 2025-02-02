const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/surveyController');
const auth = require('../middleware/auth');
const { surveyValidation } = require('../middleware/validation');

router.post('/submit', surveyValidation, surveyController.submitResponse);
router.get('/responses', auth, surveyController.getResponses);
router.get('/stats', auth, surveyController.getStats);

module.exports = router;