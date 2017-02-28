var path = require('path');

var legacy_js = {
  entry: './js/src/javascript/index.js',
  resolve: {
    modules: [ path.resolve(__dirname, "js/src") ]
  },
  output: {
    library: 'legacy_beautify_js',
    filename: 'legacy_beautify_js.js',
    path: path.resolve(__dirname, 'dist')
  }

};

var dist_js = {
  entry: './js/src/index.js',
  output: {
    library: 'beautifier',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    filename: 'beautifier.js',
    path: path.resolve(__dirname, 'dist')
  }
};

module.exports = [legacy_js, dist_js];
