import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27018';
const dbName = 'board';

async function connectDB() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        console.log('Connected successfully to MongoDB');

        return client.db(dbName);
    } catch (err) {
        console.error('Connected failed : ', err);
    }
}

export default connectDB;
