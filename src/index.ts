import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port:number = 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.set({'Content-Type': 'application/json; charset=utf-8'});
    res.end('hello express');
})

app.listen(port, () => {
    console.log(`express server start on port : ${port}`);
})