"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/welcome', (req, res, next) => {
    res.send('welcome!');
});
app.post('/signIn', (req, res, next) => {
    // req.cookies['test-token'] = 'matthew1234';
    res.setHeader('Set-cookie', 'test-token=matthew1234');
    res.send('ok');
    // res.send('welcome!');
});
app.use('/auth/:method', (req, res, next) => {
    console.log(res.header('set-cookie'));
    next();
});
app.get('/auth/getUser', (req, res, next) => {
    res.json({ data: { name: '윤창원' } });
});
app.listen('1234', () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: 1234🛡️
  ################################################
`);
});
