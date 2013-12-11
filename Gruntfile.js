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

        jslint: {
            server: {
                src: [
                    'server.js',
                    'Rest/*.js'
                ],
                exclude: [
                    'test/*.js'
                ],
                directives: {
                    node: true,
                    todo: true,
                    nomen: false
                },
                options: {
                    errorsOnly: true,
                    failOnError: false
                }
            },
            client: {
                src: [
                    'js/**/*.js'
                ],
                exclude: [
                    'js/lib/*.js'
                ],
                directives: {
                    browser: true,
                    predef: [
                        'jQuery'
                    ],
                    nomen: false
                },
                options: {
                    errorsOnly: true,
                    failOnError: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('default', ['mochaTest', 'jslint']);
};