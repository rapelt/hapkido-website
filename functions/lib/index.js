"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
const firebaseFunctions = require("firebase-functions");
const core_1 = require("@angular/core");
const express = require("express");
const path = require('path');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./main');
const express_engine_1 = require("@nguniversal/express-engine");
const module_map_ngfactory_loader_1 = require("@nguniversal/module-map-ngfactory-loader");
core_1.enableProdMode();
const app = express();
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        module_map_ngfactory_loader_1.provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('*', (req, res) => {
    res.render('index', { req });
});
exports.ssrApp = firebaseFunctions.https.onRequest(app);
//# sourceMappingURL=index.js.map