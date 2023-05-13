const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/status/:statusCode', (req, res) => {
  const statusCode = parseInt(req.params.statusCode, 10);
  if (isNaN(statusCode) || statusCode < 100 || statusCode >= 600) {
    res.status(400).send('Invalid status code. Please provide a valid HTTP status code between 100 and 599.');
  } else {
    res.status(statusCode).send(`Status code ${statusCode} returned.`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
