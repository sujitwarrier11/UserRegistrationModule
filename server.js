const express = require('express');
const app = express();
const port = 5006;
const webpack = require('webpack');
const bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
const fileUpload = require('express-fileupload');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const configServerDev = require('./webpack.server.dev.config');
const configServerProd = require('./webpack.server.prod.config');
const configClientDev = require('./webpack.client.dev.config');
const configClientProd = require('./webpack.client.prod.config');

const isProd = process.env.NODE_ENV === 'prod';

const configServer = isProd ? configServerProd : configServerDev;

const configClient = isProd ? configClientProd : configClientDev;

require('./models/User');
const psptConfig = require('./config/passport');

const MongoClient = require('mongodb').MongoClient;
const env = require('./Env');
const compiler = webpack([configServer, configClient]);





const uri = env.connectionString;
console.log("url", uri)
const client = new MongoClient(uri);

app.use(webpackDevMiddleware(compiler, {
  publicPath: configServer.output.publicPath,
  serverSideRender: true
}));






client.connect(err => {
  psptConfig(passport, client);
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(fileUpload({
    createParentPath: true
  }));
  app.use(session({ secret: '4dfsdf$R$fdsf', cookie: { maxAge: 60000 } }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(require('./routes')(client));
  app.use(require('./public/dist/server').default());
  app.listen(port, () => console.log(`Server listening on port ${port}`));
});




// if(!isProd) {
//     app.use((req, res) => {

//       res.json({
//         errors: {
//           message: {},
//           error: {},
//         },
//       });
//     });
//   }



