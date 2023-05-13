const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/status/:statusCode', (req, res) => {
  const statusCode = parseInt(req.params.statusCode, 10);
  const responseBody = req.query.body || '';
  const contentType = req.query.contentType || 'text/plain';
  const customHeaders = req.query.headers ? JSON.parse(req.query.headers) : {};

  // Set content type
  res.setHeader('Content-Type', contentType);

  // Set custom headers
  for (const [key, value] of Object.entries(customHeaders)) {
    res.setHeader(key, value);
  }

  // Send status code and custom response body
  res.status(statusCode).send(responseBody);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
