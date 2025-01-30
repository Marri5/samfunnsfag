const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  question: String,
  options: [String],
  responses: [{ option: String, count: Number }]
});

module.exports = mongoose.model('Survey', SurveySchema);
