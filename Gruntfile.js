module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
          all: ['*.js']
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          js: {
            files: {
              'js/functions.min.js': ['js/functions.js'],
              'js/plugins.min.js': ['js/plugins.js']
            }
          }
        },
        cssmin : {
            css:{
                src: 'css/style.css',
                dest: 'css/style.min.css'
            }
        },
        // running `grunt less` will compile once
        less: {
            development: {
                options: {
                    yuicompress: true,
                    cleancss: true,
                    compress: true,
                    dumpLineNumbers: 'all',
                    report: 'min'
                },
                files: {
                    "css/style.css": "less/master.less"
                }
            }
        },
        watch: {
            css: {
                files: ["less/*.less", ],
                tasks: ["less", "cssmin"]
            },
            js: {
                files: ["js/functions.js", "js/plugins.js"],
                tasks: ["uglify"]
            }
        },
    });

    // Load Grunt tasks automatically
    require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });

    // Default task(s).
    grunt.registerTask('default', ['jshint','uglify','less']);

    //Watch
    grunt.registerTask('dev', [ 'watch' ]);


};
