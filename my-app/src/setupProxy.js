const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./../public/config.json');

module.exports = function (app) {
  // config.reqPrefix: http://127.0.0.1:8081
  app.use(createProxyMiddleware('/api', { target: config.reqPrefix }));
};