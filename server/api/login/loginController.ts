import {Reuqest, Response} from 'express';

export const loginController = {
    async login(req: Request, res: Response) {
        try {
            const {username, password} = req.body;
            // const token = await loginService.authenticate(username, password);
            // res.status(200).json({token});
        }
    }
}