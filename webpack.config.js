// Import the path module from Node.js to handle file paths
var path = require('path');
// Import the HTML Webpack Plugin to create an HTML file that includes all webpack bundles
var HtmlWebpackPlugin = require('html-webpack-plugin');

// Export the webpack configuration object
module.exports = {
    // Entry point of the app, where webpack starts bundling
    entry: './app/index.js',
    
    // Configure how and where webpack will output the bundles
    output: {
        // Name of the output bundle file
        filename: 'index_bundle.js',
        // Absolute path where bundles will be output
        // __dirname is the current directory, 'dist' is the target folder
        path: path.resolve(__dirname, 'dist')
    },
    
    // Configure how different types of modules will be handled
    module : {
      // Array of rules for module handling
      rules : [
          // Rule for JavaScript files
          // Uses babel-loader to convert modern JS to browser-compatible JS
          {test : /\.(js)$/, use:'babel-loader'},
          
          // Rule for CSS files
          // Uses style-loader to inject CSS into the DOM
          // Uses css-loader to handle CSS imports
          {test : /\.css$/, use:['style-loader', 'css-loader']}
      ]
    },
    
    // Set webpack mode to development for easier debugging
    // In production, this would be set to 'production' for optimization
    mode:'development',
    
    // Array of plugins to extend webpack's capabilities
    plugins : [
        // Creates an HTML file with the correct bundles injected
        // Uses the template from app/index.html
        new HtmlWebpackPlugin ({
          template : 'app/index.html'
      })
  ]
}