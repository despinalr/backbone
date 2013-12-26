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
                    'test/test.js'
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
        },

        uglify: {
            options: {
                mangle: false
            },
            target: {
                files: {
                    'js/min/output.min.js': ['js/*.js', 'js/models/*.js', 'js/routers/*.js', 'js/utils/*.js', 'js/views/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['mochaTest', 'jshint', 'uglify']);
};