const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();
const PORT = 4001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

app.use(express.static(__dirname + '/../public'));


const reviewsProxy = createProxyMiddleware(
  {
    target: 'http://18.212.184.37:3004',
  },
  );
  app.use(
    '/api/allreviews/',
    reviewsProxy,
);

const itemDetailsProxy = createProxyMiddleware(
  {
    target: 'http://34.201.53.74:3002',
  },
  );
  app.use(
    '/items/:id',
    itemDetailsProxy,
);

const relatedProxy = createProxyMiddleware(
  {
    target: 'http://54.166.182.193:3003',
  },
  );
  app.use(
    '/api/related_products/:id',
    relatedProxy,
);

const singleItemProxy = createProxyMiddleware(
  {
    target: 'http://3.132.5.204:3001',
  },
  );
  app.use(
    '/api/items/:id',
    singleItemProxy,
);

module.exports = app;
