require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 8001;

const express = require('express');
const app = express();



// app.get('/', (req, res) => {
//     res.send('Hello rota maker');
// });



app.use('/generate-new-rota', rotaRequest);

app.use('/', express.static('dist'));

app.listen(port, () => {
    console.log('backend is up and running and frontend served at http://localhost:' + port );
});