// const webpack = require("webpack");

// module.exports = {
//   webpack: {
//     configure: {
//       resolve: {
//         fallback: {
//           process: false,
//           zlib: false,
//           stream: false,
//           util: false,
//           buffer: false,
//           asset: false,
//         },
//       },
//       plugins: [
//         new webpack.ProvidePlugin({
//           Buffer: ["buffer", "Buffer"],
//           process: "process/browser",
//         }),
//       ],
//       loaders: [
//         {
//           test: /\.css$/,
//           loader: "style-loader!css-loader",
//         },
//       ],
//     },
//   },
// };
const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};
