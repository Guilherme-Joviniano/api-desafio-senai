import queriesModel from './queries';

// eslint-disable-next-line max-len
const validateQueries = (queries) => Object.keys(queries).forEach((key) => Object.keys(queriesModel).includes(key));

export default validateQueries;
