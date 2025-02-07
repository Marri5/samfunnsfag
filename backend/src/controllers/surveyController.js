const Survey = require('../models/Survey');
const Response = require('../models/Response');

const surveyController = {
  submitResponse: async (req, res) => {
    try {
      const formattedAnswers = Object.entries(req.body.answers).map(([questionId, answer]) => ({
        questionId: parseInt(questionId),
        questionText: req.body.questions.find(q => q.id === parseInt(questionId))?.question,
        answer
      }));

      const response = new Response({
        answers: formattedAnswers
      });

      await response.save();
      res.status(201).json({ message: 'Response submitted successfully' });
    } catch (error) {
      console.error('Error submitting response:', error);
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
  },

  // Added inside the object
  getAllResponses: async (req, res) => {
    try {
      const responses = await Response.find().sort({ submittedAt: -1 });
      res.json(responses);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching responses' });
    }
  }
};

module.exports = surveyController;