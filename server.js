import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import blogRoutes from './routes/blogRoutes.js';
import userRoutes from './routes/userRoutes.js';


const app = express();
dotenv.config();

const DBURI = process.env.DBURI;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// DB Connection
mongoose.connect(DBURI, dbOptions)
    .then((req, res) => {
        console.log("DB Connected");
        app.listen(PORT, () => {
            console.log(`Listening on PORT:${PORT}`);
        });
    })
    .catch(err => console.log(err.message));

// Middlewares
app.use(express.static("public"));
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// Routes
app.use("/", blogRoutes);
app.use("/", userRoutes);
