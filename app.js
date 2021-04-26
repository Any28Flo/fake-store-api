require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


const PORT = process.env.PORT;
// require database configuration
require('./configs/db.config');

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));
app.use(express.json());

const api = require('./routes/api');

app.use('/api', api );

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`)
})