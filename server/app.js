require('dotenv').config()
const express = require('express');
const router = require('express').Router();
const cors = require('cors');
const app = express();
const fileupload = require("express-fileupload")

app.use(cors())
app.use(fileupload({
    useTempFiles: true
}))
require('./db/connection');
app.use(express.json())

app.use('/book', require('./Routes/BookRoute'))
app.use('/events', require('./Routes/EventsRoutes'))
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`listening On Port ${PORT}`)
})