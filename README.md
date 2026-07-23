## 起動方法

```
docker compose up -d
```

## テスト実行

```
docker compose exec mcp-server npm test
```

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

## サンプルレスポンス
### 正常系
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

### 存在しない場所
```
{
  "id": 2,
  "error": {
    "message": "Location not found"
  }
}
```

### location未指定
```
{
  "id": 3,
  "error": {
    "message": "location is required"
  }
}
```
