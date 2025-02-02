const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  answers: [{
    questionId: Number,
    answer: mongoose.Schema.Types.Mixed
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Response', responseSchema);