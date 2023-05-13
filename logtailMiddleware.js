const { Logtail } = require('@logtail/node');
const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);

const logtailMiddleware = (req, res, next) => {
  const startTime = Date.now();

  const logtailMiddleware = (req, res, next) => {
    const startTime = Date.now();
  
    res.on('finish', () => {
      const responseTime = Date.now() - startTime;
      const headers = Object.entries(req.headers).map(([key, value]) => ({ key, value })); // Convert headers to array of objects
  
      logtail.info({
        method: req.method,
        path: req.path,
        status: res.statusCode,
        duration: responseTime,
        ip: req.ip,
        headers,
      });
    });
  
    next();
  };

process.on('uncaughtException', (error) => {
  logtail.error('Uncaught exception', { error });
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  logtail.error('Unhandled promise rejection', { reason, promise });
});

module.exports = logtailMiddleware;