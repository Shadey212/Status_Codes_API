# HTTP Status Codes API

This is a simple API for testing HTTP status codes, response bodies, content types, and custom headers. It allows you to send a GET request to a specific endpoint and receive a response with the desired status code, custom response body, content type, and custom headers.

## Usage

Send a GET request to the following endpoint:

```
https://shadowtesting.cloud/status/:statusCode?body=:responseBody&contentType=:contentType&headers=:customHeaders
```

Replace the following placeholders with your desired values:

- `:statusCode`: The desired HTTP status code (e.g., 200, 404, 500, etc.).
- `:responseBody` (optional): The desired response body. URL-encode this value.
- `:contentType` (optional): The desired content type (e.g., `application/json`, `text/plain`, etc.). URL-encode this value.
- `:customHeaders` (optional): A URL-encoded JSON string containing custom headers as key-value pairs.

### Examples

1. Send a request to receive a `200 OK` status code:

```
https://shadow-status.herokuapp.com//status/200
```

2. Send a request to receive a `404 Not Found` status code with a custom JSON response body:

```
https://shadow-status.herokuapp.com//status/404?body=%7B%22error%22%3A%22Not%20Found%22%7D
```

The response body will be:

```json
{
  "error": "Not Found"
}
```

3. Send a request to receive a `500 Internal Server Error` status code with a custom content type and response body:

```
https://shadow-status.herokuapp.com//status/500?body=An%20internal%20error%20occurred&contentType=text%2Fplain
```

The response content type will be `text/plain`, and the response body will be:

```
An internal error occurred
```

4. Send a request to receive a `400 Bad Request` status code with custom headers:

```
https://shadow-status.herokuapp.com//status/400?headers=%7B%22X-Custom-Header%22%3A%22CustomValue%22%7D
```

The response will include the custom header `X-Custom-Header: CustomValue`.

Remember to properly URL-encode the query parameters to ensure they are interpreted correctly.

## Deployment

The API is deployed on Heroku and configured with a custom domain through Cloudflare.