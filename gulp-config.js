var env = 'public/',
  pkg   = require('./package.json');
module.exports = {
  pkg: {
    name: pkg.name
  },
  pluginOpts: {
    browserSync: {
      port   : 1987,
      server : {
        baseDir: env
      }
    },
    babel: {
      presets: [ 'es2015' ]
    },
    gSize: {
      showFiles: true
    },
    pug: {
      pretty: true,
      data  : {
        name       : pkg.name,
        description: pkg.description
      }
    },
    load: {
      rename: {
        'gulp-gh-pages'    : 'deploy',
        'gulp-util'        : 'gUtil',
        'gulp-cssnano'     : 'minify',
        'gulp-autoprefixer': 'prefix',
        'gulp-clean-css'   : 'cleancss'
      },
      lazy: false
    },
    prefix: [
      'last 3 versions',
      'Blackberry 10',
      'Android 3',
      'Android 4'
    ],
    rename: {
      suffix: '.min'
    },
    wrap: '(function() { <%= contents %> }());'
  },
  paths: {
    base: env,
    sources: {
      docs     : 'src/markup/*.pug',
      markup   : 'src/markup/**/*.html',
      overwatch: env + '**/*.{html,js,css}',
      scripts  : 'src/script/**/*.js',
      styles   : 'src/style/**/style.scss'
    },
    destinations: {
      dist: './dist',
      css : env + 'css/',
      html: env,
      js  : env + 'js/'
    }
  }
};
