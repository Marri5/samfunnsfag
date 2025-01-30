const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');
const authenticateToken = require('../middleware/auth');

router.post('/', async (req, res) => {
    try {
        const survey = new Survey({
            answers: req.body.answers
        });
        await survey.save();
        res.status(201).json({ message: 'Survey submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting survey' });
    }
});

router.get('/results', authenticateToken, async (req, res) => {
    try {
        const results = await Survey.find().sort('-timestamp');
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching results' });
    }
});

module.exports = router;