"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _express = require('express');
var _StudentController = require('./controllers/StudentController'); var _StudentController2 = _interopRequireDefault(_StudentController);
var _CourseController = require('./controllers/CourseController'); var _CourseController2 = _interopRequireDefault(_CourseController);

const router = _express.Router.call(void 0, );

router.get('/students', _StudentController2.default.filter); // list all by course or others queries
router.get('/students/:id', _StudentController2.default.show); // get student by id

router.get('/years/', _StudentController2.default.listYears);

router.get('/courses', _CourseController2.default.list); // list all courses

exports. default = router;
