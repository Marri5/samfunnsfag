const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("MongoDB tilkoblet til 10.12.3.33"))
  .catch(err => console.log("Feil ved tilkobling til MongoDB:", err));
  

const surveyRoutes = require('./routes/surveyRoutes');
app.use('/api/surveys', surveyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server kjører på port ${PORT}`));
