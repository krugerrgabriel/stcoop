import mongoose from 'mongoose';

const AdvantageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: [125, 'O nome não pode ser maior do que 125 caracteres!']
    },
    city: {
        type: String,
        required: true,
        trim: true,
        maxlength: [175, 'O nome da cidade não pode ser maior do que 175 caracteres!']
    },
    location: {
        type: Object,
        required: [true, 'Por favor informe a localização!'],
        trim: true,
    },
    link: {
        type: String,
        required: [true, 'Por favor informe o link!'],
        trim: true,
    },
    type: {
        type: String,
        required: [true, 'Por favor informe o tipo da localização!'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.Advantage || mongoose.model('Advantage', AdvantageSchema);

// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;