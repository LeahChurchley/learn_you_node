var module = require('./module');
var pathToDir = process.argv[2];
var extension = process.argv[3];

module(pathToDir, extension, function(err, list){
  if(err){
    return console.log("There was an error:", err);
  }
  list.forEach(function(listEntry){
    console.log(listEntry);
  });
});
