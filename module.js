var fs = require('fs');
var path = require('path');

function listFilesInDirectory(directoryName, fileExtension, callback) {
  fs.readdir(directoryName, function(err, list) {
    if (err){
      return callback(err);
    }
    var array = [];
    list.forEach(function(file){
      if (path.extname(file) === "." + fileExtension){
        array.push(file);
      }

    });
    return callback(null, array);
  });

}

module.exports = listFilesInDirectory;
