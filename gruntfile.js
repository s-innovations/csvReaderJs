
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-typescript');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.loadNpmTasks("grunt-contrib-clean");
    // grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    // grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-build-number');
    // grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-tsd');

    grunt.initConfig({
        buildnumber: {
            options: {
                field: 'buildnum',
            },
            files: ['package.json']
        },
        typescript: {
            local: {
                src: ["src/**/*.ts"],
                dest: "artifacts/local",
                options: {
                    module: "amd",
                    target: "es5",
                    rootDir :"src",
                   // keepDirectoryHierachy :true,
                    sourceMap: true,
                    declaration: true,
                    watch: {
                        path: ["src"],
                        after: [],
                        //  before:[],
                        atBegin: true,
                    },
                    references: ["typings/**/*.d.ts", "libs/**/*.d.ts"]
                }
            },
        },
        tsd: {
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: 'tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        },
        requirejs: {
            local: {
                options: {
                    baseUrl: "artifacts/local",
                    dir: "artifacts/dist",
                    paths: {
                        "knockout": "empty:" //"bower_components/knockout/dist/knockout",
                    },
                    skipDirOptimize: true,
                    keepBuildDir: true,
                    optimize: "uglify2",
                    uglify2: {
                        mangle: false
                    },
                    uglify: {
                        no_mangle: true
                    },
                    removeCombined: true,
                    generateSourceMaps: false,
                    onModuleBundleComplete: function (data) {
                        console.log(data);
     
                        //data.included.forEach(function (f) {
                        //    console.log(grunt.option('base') + "/artifacts/dist/" + f);
                        //    grunt.file.delete(grunt.option('base')+"/artifacts/dist/"+ f);
                        //});

                    },
                    modules: [
                        {

                            name: "CsvReader/CsvReader",
                            include: ["CsvReader/CsvReader","CsvReader/CsvReaderDelimiter","CsvReader/CsvReaderColumn"],
                            exclude: ["knockout"]
                        }                      

                    ]
                }
            }
        }
    });

    grunt.event.on('watch', function (action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
}