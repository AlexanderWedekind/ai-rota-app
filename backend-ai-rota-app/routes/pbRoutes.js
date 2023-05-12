import express from 'express';
const router = express.Router();

import pocketbaseConnect from '../middlewareFunctions/pocketbaseConnect.js';

//router.get('/all-users', pocketbaseConnect.displayAllUsers);

router.get('/all-users', (req, res) => {
    res.send('request recieved by server, sending response...')
})

export default router;

