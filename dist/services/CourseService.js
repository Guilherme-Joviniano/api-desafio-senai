"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _cursojson = require('../helpers/mock/curso.json'); var _cursojson2 = _interopRequireDefault(_cursojson);

class CourseService {
  list() {
    const response = _cursojson2.default;

    return response;
  }
}

exports. default = new CourseService();
