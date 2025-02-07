const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  answers: [{
    questionId: Number,
    questionText: String,
    answer: mongoose.Schema.Types.Mixed
  }],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Response', responseSchema);