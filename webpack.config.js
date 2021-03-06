const path = require('path');
module.exports = {
  // mode: 'development',
  entry: path.join(__dirname, 'src/', 'index'),
  // watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "main.js",
    // chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //3. Inject styles into DOM
          "css-loader", //2. Turns css into commonjs
        ]
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     "babel-loader",
      //   ]
      // },
      // {
      //   test: /.jsx?$/,
      //   include: [
      //     path.resolve(__dirname, 'src')
      //   ],
      //   exclude: [
      //     path.resolve(__dirname, 'node_modules')
      //   ],
      //   loader: 'babel-loader',
      //   query: {
      //     presets: [
      //       ["@babel/env", {
      //         "targets": {
      //           "browsers": "last 2 chrome versions"
      //         }
      //       }]
      //     ]
      //   }
      // }
    ]
  },
  // resolve: {
  //   extensions: ['.json', '.js', '.jsx']
  // },
  // devtool: 'none',
  // devServer: {
  //   contentBase: path.join(__dirname, '/dist/'),
  //   inline: true,
  //   host: 'localhost',
  //   port: 8080,
  // }
};