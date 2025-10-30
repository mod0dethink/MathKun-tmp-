import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

// JSONリクエストのパースを有効化
app.use(express.json());

// ルートエンドポイント
app.get('/', (req: Request, res: Response) => {
  res.send('hi');
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});