import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();

//connect to database
const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log(`Db connection successful`);
    })
    .catch((err)=>{
        console.log(err, "Error in DB connection");
        process.exit(1);
    })
}

export default dbconnect;