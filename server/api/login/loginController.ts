import { error } from "console";
import  {Request, Response } from "express";

export const loginController = {
  async login(req: Request, res: Response) {
    try {
      const user = (req as any).user;
    } catch (err) {
      error("Login error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
