module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    indent: 'off',
    'space-before-function-paren': 0,
    'space-before-function-paren': [
      'error',

      {
        anonymous: 'always',

        named: 'always',

        asyncArrow: 'always'
      }
    ]
  }
}
