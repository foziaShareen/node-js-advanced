const http = require("http");
const PORT = 8080;
const server = http.createServer();
server.on('request', (req, res) => {
    if (req.url === "/") {
      (res.statusCode = 200), res.setHeader("Content-Type", "application/JSON");
      res.end(
        JSON.stringify({
          message: "Hello World",
        })
      );
    } else if (req.url === "/contact") {
      (res.statusCode = 200), res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<body>");
      res.write("<h1>heading</h1>");
      res.write("</body>");
      res.write("</html>");
      res.end();
    } else {
      (res.statusCode = 404), res.end();
    }
    
})
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
