"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _serverlesshttp = require('serverless-http'); var _serverlesshttp2 = _interopRequireDefault(_serverlesshttp);



var _global = require('./middlewares/global');
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.json());
    this.app.use(_global.methods);
    this.app.use(_global.headers);
    this.app.use(_cors2.default.call(void 0, ));
  }

  routes() {
    this.app.use('/.netlify/functions/api', _routes2.default);
  }
}

const app = new App();
const handler = _serverlesshttp2.default.call(void 0, app);




exports.app = app; exports.handler = handler;
