module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
    ecmaFeatures:  {
      jsx:  true,
    },
  },
  rules:  {
    '@typescript-eslint/interface-name-prefix' : [true, 'never'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': [{ accessibility: 'no-public' }],
    '@typescript-eslint/no-use-before-define': ['off']
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};