import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Root from './Pages/Root';

const router = express.Router();
 function main(){
    router.get('/', (req, res) => {
        const app = ReactDOMServer.renderToString(<Root />);

        res.send(`<html>
    <head>
    <title>Home Test</title>
    <script src="/dist/client.js" defer></script>
    </head>
    <body>
    <div id="root">${app}</div>
    </body>
  </html>`);

    });
    return router;
};

export default main;


