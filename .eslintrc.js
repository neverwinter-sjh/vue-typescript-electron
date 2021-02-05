module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/typescript',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "class-methods-use-this": 0,
    'max-len': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }], // for (let i = 0; i < 10; i++)
    'no-underscore-dangle': ['error', { allow: ['_data', '_name'] }], // for this._data,
    'no-unused-vars': 'off',

    'prettier/prettier': [
      'error',
      {
          endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': 'off'
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
