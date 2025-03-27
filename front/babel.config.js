const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': path.resolve(__dirname, 'src'), // ← 이거 절대경로로 박음
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
    ['@babel/plugin-transform-private-methods', {loose: true}],
    'react-native-reanimated/plugin',
  ],
};
