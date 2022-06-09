module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],

  plugins: ['react', 'prettier'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'spaced-comment': 'off',
    'no-tabs': 'off',
    indent: 'off',
    'react/jsx-indent': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent-props': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/state-in-constructor': 'off',
    'class-methods-use-this': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-trailing-spaces': 'off',
    'import/prefer-default-export': ['off'],
    'import/order': [
      'warn',
      {
        groups: [
          'index',
          'sibling',
          'parent',
          'internal',
          'external',
          'builtin',
          'object',
          'type',
        ],
      },
    ],

    'prettier/prettier': ['error', { parser: 'flow' }],
  },
};
