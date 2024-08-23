import Quote from '../models/Quote.js';

// Get all quotes
export const getQuotes = async (req, res) => {
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new quote
export const addQuote = async (req, res) => {
    const quote = new Quote(req.body);
    try {
        await quote.save();
        res.status(201).json(quote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a quote
export const updateQuote = async (req, res) => {
    try {
        const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(quote);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a quote
export const deleteQuote = async (req, res) => {
    try {
        await Quote.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Quote deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
