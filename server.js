const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "Content-type": "text/html" });
  const myReadStream = fs.createReadStream(`${__dirname}/index.html`, "utf8");
  myReadStream.pipe(res);
});
server.listen(3001, "127.0.0.1");
console.log("listening to port 3000");
