module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prefer-arrow'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: [
    '.yarn/',
    '.eslintrc.js',
    '.pnp.cjs',
    'pnp.loader.mjs',
  ],
  rules: {
    // Overly strict rules (for now)
    'class-methods-use-this': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Unwanted
    'lines-between-class-members': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',

    // Disabling since better @typescript-eslint rules available or they make no sense for ts projects
    'default-case': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',

    curly: ['error', 'all'],
    'no-console': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true
      }
    ],
    'prefer-destructuring': ['error', { array: false }],
    'prefer-object-spread': 'error',
    'func-names': 'error',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_(unused)?',
        varsIgnorePattern: '_(unused)?',
        ignoreRestSiblings: true
      }
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',

    'prefer-arrow/prefer-arrow-functions': 'error',
  },
  parserOptions: {
    project: './tsconfig.json'
  },
}