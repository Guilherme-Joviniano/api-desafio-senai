import CourseService from '../services/CourseService';

class StudentController {
  list() {
    const response = CourseService.list();
    return response;
  }
}

export default new StudentController();
