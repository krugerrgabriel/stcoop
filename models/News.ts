import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: [125, 'O título não pode ser maior do que 125 caracteres!']
    },
    fineLine: {
        type: String,
        required: true,
        trim: true,
        maxlength: [175, 'O título não pode ser maior do que 175 caracteres!']
    },
    visibleTags: {
        type: Array,
        required: false,
    },
    invisibleTags: {
        type: Array,
        required: false,
    },
    image: {
        type: String,
        required: true,
    },
    development: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.News || mongoose.model('News', NewsSchema);

// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;