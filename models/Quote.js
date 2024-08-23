import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
    philosopher: { type: String, required: true },
    quote: { type: String, required: true },
    category: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;
