const path = require('path');
// Export this object

console.log(path.join(__dirname, 'public'));
// Find out the absolute path of the project then concatenate it with
// path.join(), a node function. The output path in webpack.config requires an
// absolute path console.log(__dirname);

module.exports = {
  mode: "development",
  // entry: "./src/app.js",
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        // Run the babel-loader plugin for every JS file using the presets in
        // the .babelrc file
        loader: "babel-loader",
        // Only look for JS files
        test: /\.js$/,
        // Exclude node_modules directory
        exclude: /node_modules/
      },
      {
        // The '?' following 's' makes 's' optional, so webpack recognizes both CSS and SCSS files 
        test: /\.s?css$/,
        // Use lets you specify multiple loaders. sass-loader uses node-sass to
        // convert CSS to SASS
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    // Ask server to fallback to index.html when a resource can't be found.
    // We're returning index.html for all routes since we're doing client-side
    // routing
    historyApiFallback: true
  }
};