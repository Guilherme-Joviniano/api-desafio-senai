const validateQueries = (queries) => {
  let status;
  Object.keys(queries).forEach((querie) => {
    if (querie !== 'status' || querie !== 'course' || querie !== 'year') {
      status = false;
    }
    status = true;
  });
  return status;
};

export default validateQueries;
