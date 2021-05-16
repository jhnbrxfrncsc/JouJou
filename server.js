import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import appRoutes from './routes/appRoutes.js';


const app = express();
dotenv.config();

// const SECRET = process.env.SECRET;
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
app.use("/", appRoutes);
