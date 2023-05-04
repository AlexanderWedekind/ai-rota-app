require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello rota maker');
});

app.get('/generate-new-rota', (req, res) => {
    res.send('wait please');
});

app.listen(port, () => {
    console.log('backend is up and running at port ' + port);
});