const express = require('express');
const app = express();
const port = 5006;
const bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
const path = require('path');

require('./models/User');
const psptConfig = require('./config/passport');

const MongoClient = require('mongodb').MongoClient;
const env = require('./Env');



const isProd = process.env.NODE_ENV === 'prod';

const uri = env.connectionString;
console.log("url",uri)
const client = new MongoClient(uri, { useNewUrlParser: true,  useMongoClient: true,
  keepAlive: 1,
  connectTimeoutMS: 30000,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 5000, });



client.connect(err => {
psptConfig(client);
console.log("require('./public/dist/server')",require('./public/dist/server'))
console.log("path.join(__dirname, 'public')",path.join(__dirname, 'public'))
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(session({ secret: '4dfsdf$R$fdsf', cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());
app.use(require('./routes')(client));
app.use(require('./public/dist/server').default());
app.listen(port, ()=> console.log(`Server listening on port ${port}`));
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



