import type { Request, Response, Express } from 'express';
import express from 'express';
import routeAnggota from '../router/anggota.router';

const app: Express = express();

app.get('/', (req: Request, res: Response) => res.send('Hello World'));
app.use(routeAnggota)

export default app;
