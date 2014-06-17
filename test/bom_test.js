var grunt = require('grunt');

function doTest(basePath, test) {
    test.expect(4);
    ['withBom.txt', 'withoutBOM.txt'].forEach(function(file) {
        var buf = grunt.file.read(basePath + file, { encoding: null });
        var stat = {
            size: buf.length,
            content: buf.toString()
        };
        test.equal(7, stat.size, file + ' size should be 7 bytes.');
        test.equal('123\n456', stat.content, file + ' content should be saved.');
    });
    test.done();
}

exports.bom = {
    short: doTest.bind(this, 'tmp/sample_short/'),
    long: doTest.bind(this, 'tmp/sample_long/')
};
