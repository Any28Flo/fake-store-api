require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


const PORT = process.env.PORT;
// require database configuration
require('./configs/db.config');

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://fake-store-two.vercel.app','https://fake-store-git-develop-any28flo.vercel.app/']
}));

app.use(express.json());

const api = require('./routes/api');

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('/api', api );

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`)
})