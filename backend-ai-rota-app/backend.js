require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

const app = express();

app.listen(port, () => {
    console.log('backend is running at port ' + port)
})