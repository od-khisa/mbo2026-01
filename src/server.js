const weatherHandler = require("./handlers/weather");
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "../public")));

const PORT = process.env.PORT || 3000;

// HTTPエンドポイント（起動確認）
app.get("/", (req, res) => {
  res.send("MCP Server Running");
});

// ExpressのHTTPサーバーを作成
const server = http.createServer(app);

// WebSocketサーバーをHTTPサーバーに紐付け
const wss = new WebSocket.Server({
  server,
  path: "/mcp",
});

// WebSocket接続
wss.on("connection", (ws) => {
  console.log("Client connected");

  // メッセージ受信
  ws.on("message", async (message) => {
    console.log("[Receive]", message.toString());

    let request;

    try {
      request = JSON.parse(message);
    } catch (err) {
      ws.send(
        JSON.stringify({
          error: {
            message: "Invalid JSON",
          },
        })
      );
      return;
    }

    // 仮実装
    if (request.method === "weather.get") {
        // const response = weatherHandler.handleWeather(request);
        const response = await weatherHandler.handleWeather(request);
        console.log("[Send]", response);
        ws.send(JSON.stringify(response));
    } else {
      ws.send(
        JSON.stringify({
          id: request.id,
          error: {
            message: "Unknown method",
          },
        })
      );
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// サーバー起動
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
