import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';

export const app = () => {
    const app: Application = express();
    const {json, urlencoded} = bodyParser;
    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use('*', (req: Request, res: Response) => {
        res.status(400).json({
            success: false,
            message: 'Not found',
        })
    });
    return app;
};
