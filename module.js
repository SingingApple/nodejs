const fs = require("fs");

fs.readFile("readme.txt", "utf8").then(() => {
  fs.writeFile("lol.txt", data);
});
