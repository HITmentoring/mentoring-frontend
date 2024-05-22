import { createProxyMiddleware } from 'http-proxy-middleware';

export default function addProxyMiddleware(app) {
  app.use(
    '/', // 👈🏽 your API endpoint goes here.
    createProxyMiddleware({
      target: 'http://localhost:3000', // 👈🏽 your API URL goes here.
      changeOrigin: true,
    })
  );
}