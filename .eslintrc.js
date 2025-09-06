module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: { project: './tsconfig.base.json' },
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
};
