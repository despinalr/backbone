module.exports = function(grunt) {

    grunt.initConfig({
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'should',
                    ui: 'bdd'
                },
                src: [
                    'test/*.js'
                ]
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                },
                force: true,
                ignores: ['js/lib/*.js']
            },
            files: {
                src: ['js/*.js', 'Rest/*.js', 'server.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['mochaTest', 'jshint']);
};