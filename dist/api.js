"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _serverlesshttp = require('serverless-http'); var _serverlesshttp2 = _interopRequireDefault(_serverlesshttp);
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

const handler = _serverlesshttp2.default.call(void 0, _app2.default);



exports.handler = handler;
