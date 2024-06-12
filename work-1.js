// * 서버 구축하는 페이지!

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
  if(request.method === "GET") {
    if(request.url === "/") {

      const first = fs.readFileSync("./server-login/index.html", "utf8");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(first);
      response.end();
    }
  
    if(request.url === "/style.css") {
      
      const second = fs.readFileSync("./server-login/style.css");
      
      response.statusCode = 200;
      response.setHeader('Content-Type', '; charset=utf-8');
      response.write(second);
      response.end();
    }

      if(request.url === "/work-1.js") {

      const third = fs.readFileSync("./server-login/work-1.js");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(third);
      response.end();
    }
    console.log(request.url);
  }
});
server.listen(8024);

