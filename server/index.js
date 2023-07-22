import express from 'express';
import dotenv from 'dotenv'

//components
import Connection from './connection/db.js';
import DefaultData from './default.js'
import Route from './routes/route.js'

const app = express();
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));
app.use('/',Route);

DefaultData();