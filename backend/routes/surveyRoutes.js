import express from "express";
import Survey from "../models/Survey.js";
import authenticateToken from "../middleware/auth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newSurvey = new Survey({ answers: req.body.answers });
    await newSurvey.save();
    res.status(201).json({ message: "Svar lagret!" });
  } catch (err) {
    res.status(500).json({ error: "Feil ved lagring av svar." });
  }
});

router.get("/", authenticateToken, async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ error: "Feil ved henting av svar." });
  }
});

export default router;
