require('dotenv').config();
const logtailMiddleware = require('./logtailMiddleware');

const express = require('express');
const { Logtail } = require('@logtail/node');


const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logtailMiddleware);

app.get('/test-error', (req, res, next) => {
  const error = new Error('Test error');
  next(error);
});

// Route handling code
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

// Logtail error handling middleware
app.use((err, req, res, next) => {
  logtail.error(err, {
    context: {
      request: {
        method: req.method,
        url: req.url,
        headers: req.headers,
      },
    },
  });
  next(err);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logtail.error(`Unhandled Rejection at: ${promise}`, { reason });
});

// Start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});