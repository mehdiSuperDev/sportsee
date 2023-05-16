module.exports = {
    parser: 'babel-eslint',
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
    ],
    plugins: [
      'react',
      'jsx-a11y',
      'import',
      'react-hooks',
    ],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  };
  