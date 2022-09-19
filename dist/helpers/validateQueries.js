"use strict";Object.defineProperty(exports, "__esModule", {value: true});const validateQueries = (queries) => {
  let status;
  Object.keys(queries).forEach((querie) => {
    if (querie !== 'status' || querie !== 'course' || querie !== 'year') {
      status = false;
    }
    status = true;
  });
  return status;
};

exports. default = validateQueries;
