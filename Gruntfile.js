/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    connect: {
      build: {
        options: {
          base: 'build',
          keepalive: true,
          open: true
        }
      }
    },

    copy: {
      build: {
       files: [
        {expand: true, cwd: 'src/images/', src: ['**/*.*'], dest: 'build/images', filter: 'isFile'},
        {expand: true, cwd: 'src/scripts/', src: ['**/*.*'], dest: 'build/scripts', filter: 'isFile'},
        {expand: true, cwd: 'src/bower_components/', src: ['**/*.*'], dest: 'build/bower_components', filter: 'isFile'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: 'build/css/', src: ['**/*.*'], dest: 'dist/css', filter: 'isFile'},
          {expand: true, cwd: 'build/scripts/', src: ['**/*.*'], dest: 'dist/scripts', filter: 'isFile'},
          {expand: true, cwd: 'build/images/assets', src: ['**/*.*'], dest: 'dist/images/assets', filter: 'isFile'},
          {expand: true, cwd: 'src/bower_components/', src: ['**/*.*'], dest: 'dist/bower_components', filter: 'isFile'}
        ]
      }
    },

    cssmin: {
      build: {
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-clean
    clean: {
      build: ['build', 'dist']
    },

    // https://github.com/gruntjs/grunt-contrib-sass
    sass: {
      build: {
        files: {
          'build/css/style.css': 'src/scss/style.scss',
          'build/css/develop.css': 'src/scss/develop.scss'
        }
      }
    },

    // https://github.com/nDmitry/grunt-autoprefixer
    autoprefixer:{
      build: {
        options: {
        },
        src: 'build/css/style.css',
        dest: 'build/css/style.css'
      }
    },

    // https://github.com/gruntjs/grunt-contrib-requirejs
    requirejs: {
      compile: {
        options: {
          baseUrl: "build/scripts",
          mainConfigFile: "build/scripts/main.js",
          name: "main",
          out: "build/scripts/main.min.js"
        }
      }
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      options: {
        livereload: true
      },
      src: {
        files: 'src/**/*.*',
        tasks: ['default']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default']
      },
      tasks: {
        files: 'tasks/**/*.js',
        tasks: ['default']
      }
    }

  });

  grunt.task.loadTasks('tasks');

  // https://www.npmjs.org/package/load-grunt-tasks
  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['clean', 'copy:build', 'data', 'sass', 'autoprefixer', 'cssmin', 'compile', 'copy:dist']);

};
