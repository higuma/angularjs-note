module.exports = (grunt) ->
  grunt.initConfig
    jade:
      compile:
        options:
          pretty: true
        cwd: 'src'
        src: ['**/*.jade']
        dest: 'public/'
        ext: '.html'
        expand: true
    coffee:
      compile:
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'public/'
        ext: '.js'
        expand: true
    sass:
      options:
        style: 'expanded'
      compile:
        cwd: 'src'
        src: ['**/*.sass']
        dest: 'public/'
        ext: '.css'
        expand: true

  npms = ['jade', 'coffee', 'sass']
  grunt.loadNpmTasks "grunt-contrib-#{npm}" for npm in npms
  grunt.registerTask 'default', npms

