import mongoose from 'mongoose';

const FaqSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    answer: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Faq || mongoose.model('Faq', FaqSchema);

// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;