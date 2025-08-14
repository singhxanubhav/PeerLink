import mongoose from "mongoose";
import dotenv from "dotenv"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING)
        console.log(`MongoDB connect Successfully `);
    } catch (error) {
        console.log(error);
        
    }
}