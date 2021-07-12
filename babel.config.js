module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.jsx',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@helpers': './src/helpers',
          '@screens': './src/screens',
          '@store': './src/store',
        },
      },
    ],
  ],
};
