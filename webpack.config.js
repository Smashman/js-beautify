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

var legacy_css = {
  entry: './js/src/css/index.js',
  resolve: {
    modules: [ path.resolve(__dirname, "js/src") ]
  },
  output: {
    library: 'legacy_beautify_css',
    filename: 'legacy_beautify_css.js',
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

module.exports = [dist_js, legacy_js, legacy_css];
