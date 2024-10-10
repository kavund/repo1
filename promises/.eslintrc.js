module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'no-unused-vars': 'warn',
    'eqeqeq': 'error',
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-redeclare': 'error',
    'no-use-before-define': 'error',
    'max-len': ['warn', { 'code': 80 }]
  }
}
