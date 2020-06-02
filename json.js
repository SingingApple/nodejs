const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request was made to " + req.url);
  res.writeHead(200, { "Content-type": "application/json" });
  let myObj = {
    name: "Anurag",
    age: 15,
  };
  res.end(JSON.stringify(myObj));
});
server.listen(3000, "127.0.0.1");
console.log("listeing to port 300");
