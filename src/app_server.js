import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Root from './Pages/Root';

const window = {};

const router = express.Router();
 function main(){
    router.get('/', (req, res) => {
        const app = ReactDOMServer.renderToString(<Root />);
  console.log("app", app);
        res.send(`<html>
    <head>
    <title>Home Test</title>
    <meta
    name="viewport"
    content="width=device-width,minimum-scale=1,initial-scale=1"
     />
    <script src="/dist/client.js" defer></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <style>
    html, body, p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset {
      padding: 0;
      margin: 0;
    }
    </style>
    </head>
    <body>
    <div style="width:100%;height:100%;" id="root">${app}</div>
    </body>
  </html>`);

    });
    return router;
};

export default main;


