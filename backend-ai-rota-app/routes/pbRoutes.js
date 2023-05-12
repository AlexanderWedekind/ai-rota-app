import express from 'express';
const router = express.Router();

import pocketbaseConnect from '../middlewareFunctions/pocketbaseConnect.js';

router.get('', pocketbaseConnect.displayAllUsers);

export default router;

