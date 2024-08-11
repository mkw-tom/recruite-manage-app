module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': ['error'],
    // 'indent': ['error', 2],
    // 'quotes': ['error', 'single'],
    // Prettier との競合を防ぐために設定
    'prettier/prettier': 'error',

    // 必要に応じてカスタマイズするルール
    'react/prop-types': 'off',  // TypeScript を使用しているため
    '@typescript-eslint/explicit-module-boundary-types': 'off',  // 必要に応じて設定
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],  // 未使用変数の警告
    'jsx-a11y/anchor-is-valid': 'off',  // 例: アンカー要素の検証ルールをオフ
    
  },
}
