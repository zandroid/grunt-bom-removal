/*
 * grunt-bom-removal
 * https://github.com/zandroid/grunt-bom-removal
 *
 * Copyright (c) 2013 Andrey Zaytsev
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt)
{
    grunt.registerMultiTask('bom', 'byte order mark remove files.', function()
    {
        var options = this.options({
            printMissed: grunt.option('verbose') === true
        });

        this.filesSrc.forEach(function(filepath) {
            if (!grunt.file.exists(filepath)) {
                grunt.log.error('Source file "' + filepath + '" not found.');
                return;
            }
            if (!grunt.file.isFile(filepath)) {
                grunt.log.error('Source "' + filepath + '" is not a file.');
                return;
            }

            var buf = grunt.file.read(filepath, { encoding: null });
            if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
                buf = buf.slice(3);
                grunt.file.write(filepath, buf);
                grunt.log.writeln('File "' + filepath + '" rewritten.');
            }
            else if (options.printMissed) {
                grunt.log.writeln('File "' + filepath + '" missed.');
            }
        });
    });
};