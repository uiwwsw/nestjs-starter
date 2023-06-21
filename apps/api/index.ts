import express, { Request, Response, NextFunction } from 'express';

const app = express();


app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
    res.send('welcome!');
}); 

app.post('/signIn', (req: Request, res: Response, next: NextFunction) => {
    // req.cookies['test-token'] = 'matthew1234';
    res.setHeader('Set-cookie', 'test-token=matthew1234');
    res.send('ok');
    // res.send('welcome!');
}); 
app.use('/auth/:method', (req: Request, res: Response, next: NextFunction) => {
    console.log(res.header('set-cookie'))
    next();
});
app.get('/auth/getUser', (req: Request, res: Response, next: NextFunction) => {
    res.json({data: {name: '윤창원'}})
}); 

app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});