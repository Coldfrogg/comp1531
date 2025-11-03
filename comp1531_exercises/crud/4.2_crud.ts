import express from 'express';

const app = express();
const port = 30001;

app.use(express.text());

app.get('/apple', (req, res) => {
    const name = req.query.name;
    res.send(JSON.stringify({
        msg: 'Hi, thanks for sending apple!',
    }));
});

