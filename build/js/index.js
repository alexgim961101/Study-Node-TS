import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res, next) => {
    res.set({ 'Content-Type': 'application/json; charset=utf-8' });
    res.end('hello express');
});
app.listen(port, () => {
    console.log(`express server start on port : ${port}`);
});
