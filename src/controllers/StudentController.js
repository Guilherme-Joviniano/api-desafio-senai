import StudentService from '../services/StudentService';
import { statusCode } from '../helpers';

class StudentController {
  filter(req, res) {
    const queries = req.query;

    if (!queries) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the query filter param',
      });
    }

    const response = StudentService.filter(...queries);

    if (response.error) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: response.error.message,
      });
    }

    return res.status(statusCode.OK).json(response);
  }

  getById(req, res) {
    const { id } = req.params;

    if (!id) {
      return res.status(statusCode.BAD_REQUEST).json({
        status: 'error',
        code: 400,
        message: 'bad request, is missing the id parameter',
      });
    }

    const response = StudentService.getById(id);

    if (response.error) {
      return res.status(statusCode.NOT_FOUND).json({
        status: 'error',
        code: 404,
        message: 'not founded student, bad ID',
      });
    }

    return res.status(statusCode.OK).json(response);
  }
}

export default new StudentController();
