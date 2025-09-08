
const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Ejemplo GET
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ message: 'Usuarios funcionando', time: result.rows[0].now });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
