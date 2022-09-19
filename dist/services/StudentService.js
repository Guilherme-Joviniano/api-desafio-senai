"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _alunojson = require('../helpers/mock/aluno.json'); var _alunojson2 = _interopRequireDefault(_alunojson);

class StudentService {
  filter(queries) {
    // bussines logic
    let filteredStudents = [];
    const entries = Object.entries(queries);
    entries.forEach(([key, value]) => {
      if (key === 'course') {
        filteredStudents = _alunojson2.default.filter(({
          curso,
        }) => curso[0].sigla.toLowerCase() === value);
      }
      if (key === 'status') {
        filteredStudents = filteredStudents.filter(({
          status,
        }) => status.toLowerCase() === value);
      }
      if (key === 'year') {
        filteredStudents = _alunojson2.default.filter(({
          curso,
        }) => curso[0].conclusao.toLowerCase() === value);
      }
    });
    return filteredStudents;
  }

  getById(id) {
    const response = _alunojson2.default.filter(({
      matricula,
    }) => id === matricula)[0];

    return response;
  }
}

exports. default = new StudentService();
