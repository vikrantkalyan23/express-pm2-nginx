const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// GET endpoint to serve JSON data
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data file' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
