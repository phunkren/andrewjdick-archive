/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
const Twitter = require('twitter');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();


// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.get('/twitter', function(req, res) {

  const params = {
    screen_name: 'andrewjd_ck',
    exclude_replies: true,
    include_rts: true,
    count: 1,
  };

  const client = new Twitter({
    consumer_key: '70SWl1dVTwxqKgOjcU2WtZQnF',
    consumer_secret: 'a16id08Aypthqifq2E5WdDpZuqjFvJzK8fDRzo9MzcktnKzl0U',
    access_token_key: '1100704825-Vj3XlpcL54aNAg9yFM5aB1qxLiVaxNqDgyhHHWV',
    access_token_secret: 'AkuGcMdYbMEYj7e930n6qXpFbb3sOMo1zbePmtD1433uJ'
  });

  var bar = [];

  // Retrieves a list of all of my tweets
  const foo = client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.send(tweets);
    }
  });
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
