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
      if (key === 'year') {
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

    console.log(years);
    return years;
  }
}

export default new StudentService();
