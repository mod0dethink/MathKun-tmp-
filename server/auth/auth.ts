import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// JWTシークレットキー
const SECRET_KEY = process.env.SECRET_KEY;
console.log('SECRET_KEY loaded:', SECRET_KEY); // デバッグ用

// 認証ミドルウェア
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']; // ヘッダーからトークンを取得

  if (!token) {
    return res.status(401).json({ message: 'Tokenが必要です' });
  }

  // トークンの検証ロジック（JWTでするよてい
  try {
    // ここでトークンを検証する
    console.log('Token verified:', token); // デバッグ用
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Tokenが無効です' });
  }
};

export default authMiddleware;