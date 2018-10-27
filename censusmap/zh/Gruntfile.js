/*
How does this work?

First do
navigate to this project folder on the terminal

type the command:  ls

If something like this shows up then procced. If not make sure you find the root to your project

Gruntfile.js css          download     index.html   minorities   node_modules package.json src          topojson


Next type:

npm init

This will promot you with some questions,
you can fill them out if you want but you dont have to. Just keep hitting enter until it stops asking questions

Next type:

npm install -S grunt

after that, install the required libraries
order doesnt matter but do one at a time

npm install -S grunt-contrib-cssmin

npm install -S grunt-contrib-uglify

After all that type grunt into the command line and it should work its magic

See below for more explanation

*/
'use strict';

module.exports = function(grunt){

    // Project configuration.
    grunt.initConfig({

        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {

                //include css files you want to minmize here
                //path is relative
                //thing on the left is the final file, thing on the right is the source file

                'css/layout.min.css': ['css/layout.css', 'css/leaflet-sidebar.css', 'css/leaflet.css','css/styledLayerControl.css']

                }
            }
        },
        uglify: {
            my_target: {
                files: [{
                  //same as above

                  'js/website.min.js': ['js/website.js']
                }]
            }
        }


    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);

};
