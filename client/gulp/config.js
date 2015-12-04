var ASSETS_DIR = 'assets/';
var PUBLIC_DIR = 'public/';

var config = {
  paths : {
    source : {
      jshint    : ASSETS_DIR + 'scripts/**/*.js',
      styles    : ASSETS_DIR + 'styles/**/*.{sass,scss}',
      scripts   : {
        main      : ASSETS_DIR + 'scripts/main.js',
        generated : ASSETS_DIR + 'scripts/generated',
        watch : [
          '!' + ASSETS_DIR + 'scripts/generated/**/*',
          ASSETS_DIR + 'scripts/**/*.js'
        ]
      },
      templates : ASSETS_DIR + 'templates/**/*.html',
      copy      : ASSETS_DIR + 'copy/**/*',
      root      : ASSETS_DIR
    },
    dest : PUBLIC_DIR
  }
};

module.exports = config;