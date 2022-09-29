module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 'off',
    'no-console': 'off',
    'class-methods-use-this': 'off',
  },
  ignorePatterns: ['dist/*', 'functions/*'],
};
