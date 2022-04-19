/*
 * @Author: Billy
 * @Date: 2020-09-10 09:12:00
 * @LastEditors: Billy
 * @LastEditTime: 2020-09-10 18:25:23
 * @Description: 请输入
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-control-regex': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-escape': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  overrides: [{
    files: [
      '**/__tests__/*.{j,t}s?(x)',
      '**/tests/unit/**/*.spec.{j,t}s?(x)'
    ],
    env: {
      mocha: true
    }
  }]
}