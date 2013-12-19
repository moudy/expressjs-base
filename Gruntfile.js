module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      app: {
        src: ['app/assets/js/app.js']
      , dest: 'public/app.js'
      , options: {
          debug: true
        }
      }
    }
  , sass: {
      dist: {
        options: { style: 'expanded' }
      , files: { 'public/app.css': 'app/assets/css/app.scss' }
      }
    }
  , watch: {
      scss: {
        files: ['assets/css/**/*', 'app/assets/css/app.scss']
      , tasks: ['sass']
      , options: { livereload: true }
      }
    , browserify: {
        files: ['assets/js/**/*', 'app/assets/js/app.js']
      , tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
