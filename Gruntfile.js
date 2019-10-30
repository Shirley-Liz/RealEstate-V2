'use strict';
const webpackConfig = require('./webpack.config');
const serverWebpackConfig = require('./webpack.server.config');

module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      server: {
        files: ['./src/server/**/*'],
        tasks: ['webpack:server', 'express:dev'],
        options: {
          debounceDelay: 250,
          spawn: false,
        },
      },
    },

    webpack: {
      develop: webpackConfig,
      server: serverWebpackConfig,
    },

    express: {
      dev: {
        options: {
          script: './dist/server.js',
        },
      },
    },

    clean: {
      build: [
        './dist/**/*',
      ],
    },

    checkDependencies: {
      this: {},
    },
  });

  grunt.loadNpmTasks('grunt-check-dependencies');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['clean build', 'express:dev', 'watch']);
  grunt.registerTask(
      'clean build',
      'Compiles all the assets and copies the files to the dist directory.',
      [
        'checkDependencies',
        'clean:build',
        'webpack:server',
        'webpack:develop',
      ]
  );
  grunt.registerTask('build', ['clean build']);
};
