# Status Codes API

The Status Codes API is a simple web application that allows users to simulate HTTP status code responses. It is designed for developers who want to test how their applications handle different HTTP status codes without setting up specific test cases in their backend.

## Features

- Supports all standard HTTP status codes
- Easy-to-use API
- Hosted on Heroku
- Custom domain with HTTPS

## Usage

Send a GET request to the following endpoint:

https://shadow-status.herokuapp.com/status/:statusCode

Replace `:statusCode` with the desired HTTP status code you want to receive as a response. For example, to simulate a `404 Not Found` response, send a request to:

https://shadow-status.herokuapp.com/status/404


## Deployment

The application is deployed on Heroku and uses a custom domain with Cloudflare for SSL. To deploy your own instance, follow these steps:

1. Clone this repository.
2. Create a new Heroku app.
3. Configure your custom domain in Heroku.
4. Set up Cloudflare for SSL and point your DNS records to Heroku.
5. Push the repository to Heroku.

## Contributing

We welcome contributions to improve and expand the functionality of the Status Codes API. Feel free to open issues, submit pull requests, or share your ideas on how to enhance the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
