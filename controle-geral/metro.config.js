/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: ['db', 'mp3', 'ttf', 'obj', 'mtl', 'png', 'jpg'],
      sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'svg'],
    },
  };
  