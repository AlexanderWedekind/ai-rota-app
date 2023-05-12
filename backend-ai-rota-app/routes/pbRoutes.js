import express from 'express';
const router = express.Router();

import pocketbaseConnect from '../middlewareFunctions/pocketbaseConnect.js';

//router.get('/all-users', pocketbaseConnect.displayAllUsers);

router.get('/all-users', (req, res,) => {
    console.log('request recieved by server, sending response...');
    res.send('thanks for your request, here is the response.');
})

export default router;

