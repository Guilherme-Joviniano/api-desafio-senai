import queriesModel from './queries';

// eslint-disable-next-line max-len
export default (queries) => Object.keys(queries).forEach((key) => Object.keys(queriesModel).includes(key));
