const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  title: String,
  questions: [{
    id: Number,
    type: String,
    question: String,
    options: [String]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Survey', surveySchema);