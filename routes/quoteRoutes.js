import express from 'express';
import { getQuotes, addQuote, updateQuote, deleteQuote } from '../controllers/quoteController.js';

const router = express.Router();

router.get('/quotes', getQuotes);
router.post('/quotes', addQuote);
router.put('/quotes/:id', updateQuote);
router.delete('/quotes/:id', deleteQuote);

export default router;
