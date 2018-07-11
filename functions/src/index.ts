
import 'zone.js/dist/zone-node';
import * as firebaseFunctions from 'firebase-functions';
import { enableProdMode } from '@angular/core';
import * as express from 'express';
const path = require('path');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./main');
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

enableProdMode();

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap:  AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', __dirname);


app.get('*', (req, res) => {
  res.render('index', {req});
});


exports.ssrApp = firebaseFunctions.https.onRequest(app);
