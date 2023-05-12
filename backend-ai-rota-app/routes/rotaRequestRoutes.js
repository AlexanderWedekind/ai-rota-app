import express from 'express';
const router = express.Router()
import newRotaFromOpenAI from '../middlewareFunctions/rotaRequest.js';




router.get('', newRotaFromOpenAI);

export default router;
