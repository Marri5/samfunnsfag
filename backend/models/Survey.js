import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  answers: [{ question: String, answer: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Survey", surveySchema);
