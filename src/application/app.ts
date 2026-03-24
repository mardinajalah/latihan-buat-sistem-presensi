import type { Request, Response, Express } from 'express';
import express from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => res.send('Hello World'));

export default app;
