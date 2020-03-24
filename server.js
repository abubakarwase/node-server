const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo two" },
  { id: 3, text: "Todo three" }
];

const server = http.createServer((req, res) => {
  //   const { headers, url, method } = req;
  //   console.log(headers, url, method);
  //   res.setHeader("content-type", "text-html");
  res.setHeader("content-type", "application/json");
  res.setHeader("X-Powered-By", "node.js");
  //   res.write("<h1>Hello</h1>");
  //   res.write("<h1>Hello again</h1>");
  res.end(
    JSON.stringify({
      success: true,
      data: todos
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
