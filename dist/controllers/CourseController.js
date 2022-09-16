"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CourseService = require('../services/CourseService'); var _CourseService2 = _interopRequireDefault(_CourseService);


var _helpers = require('../helpers');

class StudentController {
  list(req, res) {
    const response = _CourseService2.default.list();

    return res.status(_helpers.statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }
}

exports. default = new StudentController();
