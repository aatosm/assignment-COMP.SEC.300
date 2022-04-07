module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint"
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': ["error", { "functions": false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'no-unused-vars': 'off',
    indent: ['error', 2],
    'semi': 'error'
  }
};