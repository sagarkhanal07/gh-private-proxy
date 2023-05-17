require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const ORGANIZATION = process.env.GH_OWNER;
const REPO = process.env.GH_REPO;

app.use(morgan('short'));

app.use(`/${REPO}/${ORGANIZATION}`, createProxyMiddleware({
  target: `https://raw.githubusercontent.com`,
  changeOrigin: true,
  pathRewrite: {[`^/${REPO}/`]: '/'},
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('Accept', 'application/vnd.github+json');
    proxyReq.setHeader('Authorization', `Bearer ${process.env.GH_PAT}`);
  }
}));

app.use(`/${REPO}/repos`, createProxyMiddleware({
  target: `https://api.github.com`,
  changeOrigin: true,
  pathRewrite: { [`^/${REPO}/`]: '/' },
  onProxyReq(proxyReq, req, res) {
    proxyReq.setHeader('Accept', 'application/vnd.github+json');
    proxyReq.setHeader('Authorization', `Bearer ${process.env.GH_PAT}`);
  }
}));

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
