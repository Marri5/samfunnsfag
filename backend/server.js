const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/survey/submit', (req, res) => {
  res.status(200).json({ message: 'Survey submitted successfully!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(5000, () => {
  console.log('Server running on http://10.10.1.122:5000');
});
