import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config()
mongoose.set('strictQuery', false);

async function dbConnect() {

    await mongoose.connect(process.env.DB_URL);

}

dbConnect().then(res => console.log("CONNECTED"));
dbConnect().catch(err => console.log(err));


export default dbConnect;
