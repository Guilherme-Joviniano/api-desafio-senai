import students from '../helpers/mock/aluno.json';
import {
  queriesModel,
} from '../helpers';

class StudentService {
  filter(queries) {
    let filteredStudents = [];
    const entries = Object.entries(queries);

    entries.forEach(([key, value]) => {
      if (key === queriesModel.course) {
        filteredStudents = students.filter(({
          curso,
        }) => curso[0].sigla.toLowerCase() === value);
      }
      if (key === queriesModel.status) {
        filteredStudents = filteredStudents.filter(({
          status,
        }) => status.toLowerCase() === value);
      }
      if (key === queriesModel.year) {
        filteredStudents = students.filter(({
          curso,
        }) => curso[0].conclusao.toLowerCase() === value);
      }
    });

    return filteredStudents;
  }

  getById(id) {
    const response = students.filter(({
      matricula,
    }) => id === matricula)[0];

    return response;
  }

  listYears(course) {
    const years = [];

    const filteredStudents = students.filter(({
      curso,
    }) => curso[0].sigla.toLowerCase() === course.toLowerCase());

    filteredStudents.forEach(({
      curso,
    }) => {
      years.push(curso[0].conclusao);
    });

    return years.filter((
      year,
      index,
    ) => years.indexOf(year) === index);
  }
}

export default new StudentService();
