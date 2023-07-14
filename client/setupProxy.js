const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/createAuthLink',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace with the actual URL of your back-end server
      changeOrigin: true,
    })
  );

  app.use(
    '/createBasiqUser',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace with the actual URL of your back-end server
      changeOrigin: true,
    })
  );

  app.use(
    '/authToken',
    createProxyMiddleware({
      target: 'http://localhost:3000', // Replace with the actual URL of your back-end server
      changeOrigin: true,
    })
  );
};
