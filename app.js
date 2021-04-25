const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT;

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}));

app.get('/', (req, res) => {
    app.send('Hola');
})

app.listen(PORT, () => {
    console.log('Server running')
})