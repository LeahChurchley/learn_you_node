var http = require('http');

function httpClient(){
  http.get(process.argv[2], function(response){
    response.setEncoding();
    response.on("data", function (data) { 
      console.log(data);
    });
  });
}

httpClient();
