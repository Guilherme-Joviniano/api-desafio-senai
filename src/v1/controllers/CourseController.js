import CourseService from '../services/CourseService';
import {
  statusCode,
} from '../helpers';

class StudentController {
  list(req, res) {
    const response = CourseService.list();

    return res.status(statusCode.OK).json({
      status: 'ok',
      code: 200,
      message: response,
    });
  }
}

export default new StudentController();
