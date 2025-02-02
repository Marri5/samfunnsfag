const Survey = require('../models/Survey');
const Response = require('../models/Response');

const surveyController = {
  submitResponse: async (req, res) => {
    try {
      const response = new Response({
        answers: req.body.answers
      });
      await response.save();
      res.status(201).json({ message: 'Response submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getResponses: async (req, res) => {
    try {
      const responses = await Response.find()
        .sort({ createdAt: -1 })
        .limit(100);
      res.json(responses);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  getStats: async (req, res) => {
    try {
      const totalResponses = await Response.countDocuments();
      const recentResponses = await Response.find()
        .sort({ createdAt: -1 })
        .limit(5);
      
      res.json({
        totalResponses,
        recentResponses
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = surveyController;