import mongoose from 'mongoose';

const AdvantageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: [50, 'O nome não pode ser maior do que 50 caracteres!']
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: [100, 'A descrição não pode ser maior do que 100 caracteres!']
    },
    image: {
        type: String,
        required: [true, 'Por favor informe a imagem!'],
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