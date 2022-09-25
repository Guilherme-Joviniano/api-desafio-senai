// eslint-disable-next-line max-len
const validateQueries = (queries) => Object.keys(queries).map((key) => key !== 'course' || key !== 'status' || key !== 'year');

export default validateQueries;
