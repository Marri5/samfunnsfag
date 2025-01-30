const express = require('express');
const Survey = require('../models/Survey');
const router = express.Router();

// Opprett ny undersøkelse
router.post('/', async (req, res) => {
  try {
    const { question, options } = req.body;
    const survey = new Survey({ question, options, responses: options.map(opt => ({ option: opt, count: 0 })) });
    await survey.save();
    res.status(201).json(survey);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Hent alle undersøkelser
router.get('/', async (req, res) => {
  const surveys = await Survey.find();
  res.json(surveys);
});

// Send inn svar
router.post('/:id/respond', async (req, res) => {
  const { option } = req.body;
  const survey = await Survey.findById(req.params.id);
  const responseIndex = survey.responses.findIndex(resp => resp.option === option);
  if (responseIndex !== -1) {
    survey.responses[responseIndex].count += 1;
    await survey.save();
  }
  res.json(survey);
});

module.exports = router;
