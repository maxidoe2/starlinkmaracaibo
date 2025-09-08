
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Starlink Maracaibo Backend funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor backend escuchando en puerto ${port}`);
});
