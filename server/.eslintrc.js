module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "ignorePatterns": ["/src/migrations/**/*.ts"],
    "rules": {
      'comma-dangle': 'off',
      'max-len': ['error', { code: 120 }],
      'new-cap': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
      'no-useless-catch': 'off',
      'indent': 'off'
    }
}
