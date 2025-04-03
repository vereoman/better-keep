import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./src/config/database.ts";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const startServer = async () => {
    try {
        await connectDatabase();
        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`);
        }) ;
    } catch (error) {
        console.error("Failed to start server");
    }
};

startServer();