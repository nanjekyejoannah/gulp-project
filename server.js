var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {
}).listen(3000);


fs.readFile("index.html", function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT || 8000);
});