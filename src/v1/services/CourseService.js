import cursos from '../helpers/mock/curso.json';

class CourseService {
  list() {
    const response = cursos;

    return response;
  }
}

export default new CourseService();
