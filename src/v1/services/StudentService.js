import students from '../helpers/mock/aluno.json';

class StudentService {
  filter(queries) {
    // bussines logic
    let filteredStudents = [];
    const entries = Object.entries(queries);
    entries.forEach(([key, value]) => {
      if (key === 'course') {
        filteredStudents = students.filter(({
          curso,
        }) => curso[0].sigla.toLowerCase() === value);
      }
      if (key === 'status') {
        filteredStudents = filteredStudents.filter(({
          status,
        }) => status.toLowerCase() === value);
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
}

export default new StudentService();
