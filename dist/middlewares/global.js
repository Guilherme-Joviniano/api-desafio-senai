"use strict";Object.defineProperty(exports, "__esModule", {value: true});const headers = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

const methods = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
};




exports.methods = methods; exports.headers = headers;
