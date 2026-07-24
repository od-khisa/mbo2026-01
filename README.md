## 概要

MCP(Model Context Protocol)の学習用として作成した
天気取得サーバです。

WebSocketでリクエストを受信し、
場所を指定すると天気情報を返却します。

モックデータと外部天気APIの切り替えに対応しています。

---

## 使用技術

- Node.js
- Express
- ws
- Docker
- Jest

---

## 起動方法

```
docker compose up -d
```

---

## テスト実行

```
docker compose exec mcp-server npm test
```

---

## 動作確認手順

1. サーバーを起動する

```
docker compose up -d
```

2. ブラウザでアクセスする

http://localhost:3000

3. 「接続」ボタンを押す

期待結果：
Connected が表示される

4. 場所で「Tokyo」を選択する

5. 「送信」ボタンを押す

期待結果：
Tokyo の天気情報が返却される

---

## サンプルレスポンス
### [mock]正常系
```
{
  "id": 1,
  "result": {
    "location": "Tokyo",
    "weather": "Sunny",
    "temperature": 30
  }
}
```

### [mock]存在しない場所
```
{
  "id": 2,
  "error": {
    "message": "Location not found"
  }
}
```

### [mock]location未指定
```
{
  "id": 3,
  "error": {
    "message": "location is required"
  }
}
```

### [API]正常系
```
{
  "id":1784879476194,
  "result":{
      "location":"Tokyo",
      "weather":"Unknown",
      "temperature":29.5
    }
}
```

### [API]存在しない場所
```
{
  "id":1784879516154,
  "error":{
    "message":"Location not found"
  }
}
```

### [API]location未指定
```
{
  "id":1784879532917,
  "error":{
    "message":"location is required"
  }
}
```
