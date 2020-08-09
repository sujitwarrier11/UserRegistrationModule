import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import Routes from './Routes';
import createReducer from '@root/src/Redux/reducer';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import theme from '@root/src/theme';
import "regenerator-runtime/runtime";
import "core-js/stable";




const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];
const store = createStore(createReducer({}),
    applyMiddleware(...middleware));

const window = {};

const router = express.Router();
 function main(){
    router.get('*', (req, res) => {

         const sheets = new ServerStyleSheets();
        const app = ReactDOMServer.renderToString(sheets.collect(<ThemeProvider theme={theme}><Provider store={store}><StaticRouter location={req.url}> <Switch>
           <Routes />
      </Switch></StaticRouter></Provider></ThemeProvider>));
      const css = sheets.toString();
        res.send(`<html>
    <head>
    <title>Home Test</title>
    <meta
    name="viewport"
    content="width=device-width,minimum-scale=1,initial-scale=1"
     />
     <style>${css}</style>
    <script src="/dist/client.js" defer></script>
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


