module.exports = {
  presets: ['module:@react-native/babel-preset', 'module:babel-plugin-styled-components'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
