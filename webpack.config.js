module.exports = {
  entry: "./app-client.js",
  output: {
    filename: "public/bundle.js",
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /app-server.js/],
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "stage-0", "react"]
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  }
}