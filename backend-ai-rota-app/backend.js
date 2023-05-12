import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
const port = process.env.PORT || 8001;

import express, { json } from 'express';
const app = express();
app.use(json());

import rotaRequestRoutes from './routes/rotaRequestRoutes.js';
import pbRoutes from './routes/pbRoutes.js';



// app.get('/', (req, res) => {
//     res.send('Hello rota maker');
// });

app.get('/ping-server', (req, res) => {
    console.log('frontend pinged me');
    const reply = "thanks, I'll ping you back";
    res.send(JSON.stringify(reply));
})

app.use('/all-users', pbRoutes);

app.use('/generate-new-rota', rotaRequestRoutes);

app.use('/', express.static('../ai-rota-app/dist'));

app.listen(port, () => {
    console.log('backend is up and running and frontend served at http://localhost:' + port );
});