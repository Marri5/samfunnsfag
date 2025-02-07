const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5175",
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.options("*", cors());

app.post("/api/survey/submit", (req, res) => {
  console.log("Survey data received:", req.body);
  res.json({ message: "Survey submitted successfully!" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
