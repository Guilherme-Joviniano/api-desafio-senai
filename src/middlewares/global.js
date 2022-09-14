const headers = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
};

const methods = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
};

export {
  methods,
  headers,
};
