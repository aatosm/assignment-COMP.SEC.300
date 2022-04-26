module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      'comma-dangle': 'off',
      'max-len': ['error', { code: 120 }],
      'new-cap': 'off',
      'no-console': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
      'react/prop-types': 0,
      'react/no-deprecated': 'off',
      'no-useless-catch': 'off',
      indent: ['error', 2],
      'react/react-in-jsx-scope': 'off'
    }
}
