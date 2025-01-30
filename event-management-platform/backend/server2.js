require("dotenv").config;
const cors = require('cors');
const express = require('express');

const db = require('./config/db')
const event = require('./routes/eventRoutes');
const app = express()
db()

app.use(cors())
app.use(express.json())

app.use('/api/event', event)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(":mine connected");
})