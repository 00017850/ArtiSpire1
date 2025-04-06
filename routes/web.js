const express = require('express');
const router = express.Router();
const fs = require('fs');

// Read the mock database
const readData = () => {
    const rawData = fs.readFileSync('./mock_db.json');
    return JSON.parse(rawData);
}

// Write to the mock database
const writeData = (data) => {
    fs.writeFileSync('./mock_db.json', JSON.stringify(data, null, 2));
}

// Home route
router.get('/', (req, res) => {
    const artEntries = readData();
    res.render('index', { title: 'Artispire - Home', artEntries });
});

// Add Art route
router.get('/add', (req, res) => {
    res.render('add', { title: 'Add New Art' });
});

// Handle form submission to add a new art entry
router.post('/', (req, res) => {
    const { title, description, image } = req.body;
    
    // Read the existing data from mock_db.json
    const artEntries = readData();
    
    // Create a new art entry with a unique ID
    const newArtEntry = {
        id: artEntries.length + 1,
        title,
        description,
        image
    };
    
    // Add the new entry to the array
    artEntries.push(newArtEntry);
    
    // Write the updated data back to mock_db.json
    writeData(artEntries);

    // Redirect to the home page to see the added art entry
    res.redirect('/');
});

module.exports = router;
