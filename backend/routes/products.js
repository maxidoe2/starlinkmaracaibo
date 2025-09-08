
const express = require('express');
const router = express.Router();

// Dummy route
router.get('/', (req, res) => {
    res.json([{ id: 1, name: 'Antena Starlink' }, { id: 2, name: 'Estereo para carro' }]);
});

module.exports = router;
