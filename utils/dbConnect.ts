import mongoose from 'mongoose';

const connection = {};

const dbConnect = async () => {
    /* @ts-ignore */
    if(connection.isConnected){
        return;
    }

    const db = await mongoose.connect(process.env.MONGODB_URI, {
        // @ts-ignore
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    /* @ts-ignore */
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;