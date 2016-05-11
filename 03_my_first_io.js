var fs = require('fs');

function readFile(){
var file = fs.readFileSync(process.argv[2], {
  encoding:"utf8"
});
var newLineCount = file.split('\n');
console.log((newLineCount.length)-1);
}

readFile();

