import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        maxlength: [150, 'O nome não pode ser maior do que 150 caracteres!']
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: [150, 'O e-mail não pode ser maior do que 150 caracteres!']
    },
    cpf: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        maxlength: [15, 'O CPF não pode ser maior do que 15 caracteres!']
    },
    password: {
        type: String,
        required: true,
        trim: true,
        maxlength: [255, 'A senha não pode ser maior do que 255 caracteres!'],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);

// const Product = mongoose.model('Product', ProductSchema);
// module.exports = Product;