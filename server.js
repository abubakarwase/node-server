const http = require("http");

const todos = [
  { id: 1, text: "Todo One" },
  { id: 2, text: "Todo two" },
  { id: 3, text: "Todo three" }
];

const server = http.createServer((req, res) => {
  const { method, url } = req;
  let body = [];
  req
    .on("data", chunk => {
      body.push(chunk);
    })
    .on("end", () => {
      body = Buffer.concat(body).toString();

      let status = 404;
      const response = {
        success: false,
        data: null
      };

      if (method === "GET" && url === "/todos") {
        status = 200;
        response.success = true;
        response.data = todos;
      }
      if (method === "POST" && url === "/todos") {
        const { id, text } = JSON.parse(body);

        if (!id || !test) {
          status = 400;
          response.success = false;
        } else {
          status = 201;
          response.success = true;
          response.data = { id, text };
          todos.push({ id, text });
        }
      }

      res.writeHead(status, {
        "content-type": "application/json",
        "X-Powered-By": "node.js"
      });

      res.end(JSON.stringify(response));
    });
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
