import mongoose from "mongoose";

const connectDatabase = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error("MONGO_URI is not defined in environment variables.");
        process.exit(1);
    }
    
    try {
        await mongoose.connect(mongoUri);
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection failed");
        process.exit(1);
    }
};

export default connectDatabase;