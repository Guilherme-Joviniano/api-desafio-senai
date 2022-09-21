"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _StudentService = require('../services/StudentService'); var _StudentService2 = _interopRequireDefault(_StudentService);



var _helpers = require('../helpers');

class StudentController {
  listYears(req, res) {
    const {
      course,
    } = req.query;

    const response = _StudentService2.default.listYears(course);

    if (response.length === 0) {
      return res.status(_helpers.statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, invalid value in the queries',
      });
    }

    return res.status(_helpers.statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }

  filter(req, res) {
    const queries = req.query;

    if (Object.keys(queries).length === 0) {
      return res.status(_helpers.statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the query filter param',
      });
    }

    if (!_helpers.validateQueries.call(void 0, queries)) {
      return res.status(_helpers.statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, unexpected querie parameter',
      });
    }

    const response = _StudentService2.default.filter(queries);

    if (response.length === 0) {
      return res.status(_helpers.statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'Invalid value in the query parameter',
      });
    }

    return res.status(_helpers.statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }

  show(req, res) {
    const {
      id,
    } = req.params;

    if (!id) {
      return res.status(_helpers.statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the id parameter',
      });
    }

    const response = _StudentService2.default.getById(id);

    if (!response) {
      return res.status(_helpers.statusCode.NOT_FOUND).json({
        status: 'error',
        code: 404,
        message: 'not founded student, bad ID',
      });
    }

    return res.status(_helpers.statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }
}

exports. default = new StudentController();
