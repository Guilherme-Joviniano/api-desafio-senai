import StudentService from '../services/StudentService';
import {
  statusCode,
  validateQueries,
} from '../helpers';

class StudentController {
  listYears(req, res) {
    const {
      course,
    } = req.query;

    if (!course) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, missing the querie parameter',
      });
    }

    const response = StudentService.listYears(course);

    if (response.length === 0) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, invalid value in the queries',
      });
    }

    return res.status(statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }

  filter(req, res) {
    const queries = req.query;

    if (Object.keys(queries).length === 0) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the query filter param',
      });
    }

    if (!validateQueries(queries)) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, unexpected querie parameter',
      });
    }

    const response = StudentService.filter(queries);

    if (response.length === 0) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'Invalid value in the query parameter',
      });
    }

    return res.status(statusCode.OK).json({
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
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the id parameter',
      });
    }

    const response = StudentService.getById(id);

    if (!response) {
      return res.status(statusCode.NOT_FOUND).json({
        status: 'error',
        code: 404,
        message: 'not founded student, bad ID',
      });
    }

    return res.status(statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }
}

export default new StudentController();
