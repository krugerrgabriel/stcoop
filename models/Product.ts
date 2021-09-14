import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor informe o título do produto ou serviço!'],
        unique: true,
        trim: true,
        maxlength: [50, 'O título não pode ser maior do que 50 caracteres!']
    },
    description: {
        type: String,
        required: [true, 'Por favor informe a descrição do produto ou serviço!'],
        trim: true,
        maxlength: [150, 'A descrição não pode ser maior do que 150 caracteres!']
    },
    mediaType: {
        type: String,
        required: [true, 'Por favor informe o tipo de media do produto ou serviço!'],
    },
    image: {
        type: String,
        required: false,
    },
    video: {
        type: String,
        required: false,
    },
    linkTrigger: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);

// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;