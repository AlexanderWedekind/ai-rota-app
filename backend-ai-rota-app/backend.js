require('dotenv').config();
const path = require('path');
const port = process.env.PORT || 8001;

const express = require('express');
const app = express();

const rotaRequest = require('./routes/rotaRequestRoutes.js');



// app.get('/', (req, res) => {
//     res.send('Hello rota maker');
// });

app.get('/ping-server', (req, res) => {
    console.log('frontend pinged me');
    const reply = "thanks, I'll ping you back";
    res.send(JSON.stringify(reply));
})

app.use('/generate-new-rota', rotaRequest);

app.use('/', express.static('../ai-rota-app/dist'));

app.listen(port, () => {
    console.log('backend is up and running and frontend served at http://localhost:' + port );
});