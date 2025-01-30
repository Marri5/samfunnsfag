const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
    answers: {
        type: Map,
        of: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Survey', surveySchema);