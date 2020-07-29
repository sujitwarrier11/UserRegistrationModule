const express = require('express');
const app = express();
const port = 5006;
const bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
const path = require('path');

require('./models/User');

const isProd = process.env.NODE_ENV === 'prod';


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(session({ secret: '4dfsdf$R$fdsf', cookie: { maxAge: 60000 }}));
app.use(passport.initialize());
app.use(passport.session());

app.get("/",(req,res) =>{
    res.send("hello");
});

if(!isProd) {
    app.use((err, req, res) => {
      res.status(err.status || 500);
  
      res.json({
        errors: {
          message: err.message,
          error: err,
        },
      });
    });
  }



app.listen(port, ()=> console.log(`Server listening on port ${port}`));