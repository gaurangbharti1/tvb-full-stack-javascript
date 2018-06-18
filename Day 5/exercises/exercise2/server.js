const fs = require("fs");
const http = require("http");

const file = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.write(file);
  res.end();
});

server.listen(3000, () => {
  console.log("Started server on http://localhost:3000.");
});
