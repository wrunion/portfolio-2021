// require('dotenv').config();
// const keys = require('../config/nodeKeys');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');
const app = express();
const ejs = require('ejs')
app.disable('x-powered-by');

/* Middleware */
app.use(compression({ filter: shouldCompress }))
function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    return false
  }
  return compression.filter(req, res)
}
app.use(cors());
app.use(helmet.hidePoweredBy({ setTo: 'GNU Terry Pratchett' }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// FOR PRODUCTION USE
// app.use(function(req, res, next) {
//   /* Add Cache-Control headers to all requests */
//   const expireAfterMinutes = 60;
//   const cacheControlHeaderValue = isProdEnvironment
//     ? `public, max-age=${expireAfterMinutes/2 * 60}, stale-while-revalidate=${expireAfterMinutes/2 * 60}`
//     : `no-cache`
//   res.header('Cache-Control', cacheControlHeaderValue);
//   next();
// });

// FOR DEVELOPMENT
app.use(function(req, res, next) {
  /* Add Cache-Control headers to all requests */
  const expireAfterMinutes = 60;
  const cacheControlHeaderValue = `no-cache`
  res.header('Cache-Control', cacheControlHeaderValue);
  next();
});



app.set('view engine', ejs)

/* Routes */
app.get('/', (req, res) => {
  res.render('index.ejs', { activeTab: 'home' })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);