import express from 'express';  
import postRoute from './routes/post.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config(); //config() method is used to load environment variables from a .env file into process.env

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.listen(8800, () => {
    console.log('Server is running on port 8800');
});