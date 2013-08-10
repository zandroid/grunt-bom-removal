/*
 * grunt-bom-removal
 * https://github.com/zandroid/grunt-bom-removal
 *
 * Copyright (c) 2013 Andrey Zaytsev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        clean: {
            tmp: ['tmp']
        },
        copy: {
            tmp: {
                expand: true,
                cwd: 'test/fixtures',
                src: '**',
                dest: 'tmp'
            }
        },

        // Configuration to be run (and then tested).
        bom: {
            short: ['tmp/sample_short/*.txt'],
            long: {
                options: { printMissed: true },
                src: ['tmp/sample_long/withBOM.txt', 'tmp/sample_long/withoutBOM.txt']
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Setup a test helper to create some folders.
    grunt.registerTask('tmp', ['clean', 'copy']);

    // Whenever the 'test' task is run, first create some files to be cleaned,
    // then run this plugin's task(s), then test the result.
    grunt.registerTask('test', ['tmp', 'bom', 'nodeunit']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
