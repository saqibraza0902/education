require('dotenv').config()
const express = require('express');
const router = require('express').Router();
const cors = require('cors');
const app = express();

app.use(cors())
require('./db/connection');
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening On Port ${PORT}`)
})