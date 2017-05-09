'use strict';

module.exports = {
  buildDir: './dist/',
  nodeDir: './node_modules/',
  cleanFiles: './dist/**/*',
  styles: {
    main: 'scss/style.+(scss|sass)',
    src: 'scss/**/*.+(scss|sass)',
    dest: './dist/css',
    name: 'style.css',
  },
  scripts: {
    src: 'js/**/*.js',
    app: 'js/app/*.js',
    vend: 'js/vendor/*.js',
    dest: './dist/js',
    name: 'scripts.js',
  },
  svg: {
    spriteSrc: 'images/svg/src/**/*.svg',
    minDir: 'images/svg/min',
    spriteDest: 'images/svg',
    src: './images/src/**/*.svg',
    dest: './dist/images'
  },
  templates: {
    src: './*.pug',
    dest: './dist'
  },
  img: {
    src: './images/src/**/*.+(png|jpeg|jpg|gif)',
    srcDir: './images/src',
    dest: './dist/images'
  }
};
