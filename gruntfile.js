module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> v<%= pkg.version %> \n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n */\n',
    
    sass: {
      default: {
        options: {
          style: 'compact',
          sourcemap: 'none',
          banner: '<%= banner %>'
        },
        files: {
          'css/style.css' : 'sass/style.scss'
        }
      }
    },
    
    watch: {
      default: {
        files: ['sass/**/*.scss'],
        tasks: ['default']
      },
      options: {
        interrupt: false,
        nospawn: true,
        event: 'all',
        interval: 1000,
        debounceDelay: 1000
      },
    },
    
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer'),
        ]
      },
      default: {
        src: 'css/style.css'
      }
    }
    
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-postcss');

  // Default task(s).
  grunt.registerTask('default', [ 'sass:default', 'postcss:default' ] );

};
