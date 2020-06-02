const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    const read = fs.createReadStream(`${__dirname}/index.html`);
    read.pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-type": "text/html" });
    const read = fs.createReadStream(`${__dirname}/lol.html`);
    read.pipe(res);
  }
});
server.listen(3000, "127.0.0.1");
console.log("listening to port 3000");
