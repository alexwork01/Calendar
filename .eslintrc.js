module.exports = {
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['import', 'jsx-a11y', 'react', 'prettier', 'flowtype'],
  settings: {
    "import/resolver": {
      "babel-module": {}
    }
  },
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  globals: {
    '__DEV__': true,
    'shallow': true,
    'test': true,
    'expect': true
  },
  rules: {
    "import/prefer-default-export": "off",
    'no-console': 1,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/jsx-one-expression-per-line': 0,
    'prettier/prettier': ['error', {
      'singleQuote': true
    }],
    "no-use-before-define": ["error", { "functions": false, "classes": true }]
  }
};
