var fs = require('fs');

function readFile() {
  fs.readFile(process.argv[2],{encoding: "utf8"}, function doneReading(err, fileContents) {
    var newLineCount = fileContents.split('\n');
    console.log((newLineCount.length)-1);
  });
}
readFile();
