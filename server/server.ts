import express from 'express';
import type { Request, Response } from 'express';
import test from 'node:test';

const app = express();
const port = 8000;

// JSONリクエストのパースを有効化
app.use(express.json());

// ルートエンドポイント
app.get('/', (req: Request, res: Response) => {
  res.send('hi UNTaaああああaaaaaI can you aaasee the change?');
});

app.get('/api/data', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the server!',
            test: 'This is test message.' });
});

// サーバーの起動(dockerコンテナ内で動かすからlocalhostじゃなくて0.0.0.0にバインドしてる")
app.listen(port,"0.0.0.0" ,() => {
  console.log(`Server is running at http://localhost:${port}`);
});