import queriesModel from './queries';

// eslint-disable-next-line max-len
const validateQueries = (queries) => Object.keys(queries).map((key) => Object.keys(queriesModel).includes(key));

export default validateQueries;
