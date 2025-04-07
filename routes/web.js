const express = require('express');
const router = express.Router();
const fs = require('fs');
const {v4}=require('uuid')
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
        id:v4,
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

// Edit Art route (GET)
router.get('/edit/:id', (req, res) => {
    const artEntries = readData();
    const artEntry = artEntries.find(entry => entry.id ===req.params.id);

    if (artEntry) {
        res.render('edit', { title: 'Edit Art Entry', artEntry });
    } else {
        res.status(404).send('Art entry not found');
    }
});

// Handle form submission to edit an existing art entry
router.post('/edit/:id', (req, res) => {
    const { title, description, image } = req.body;
    const artEntries = readData();
    const artEntryIndex = artEntries.findIndex(entry => entry.id === req.params.id);

    if (artEntryIndex !== -1) {
        // Update the art entry
        artEntries[artEntryIndex] = {
            id: artEntries[artEntryIndex].id,
            title,
            description,
            image
        };

        // Write the updated data back to mock_db.json
        writeData(artEntries);

        // Redirect to the home page
        res.redirect('/');
    } else {
        res.status(404).send('Art entry not found');
    }
});

// Delete Art route
router.get('/delete/:id', (req, res) => {
    let artEntries = readData();
    artEntries = artEntries.filter(entry => entry.id !== parseInt(req.params.id));
    writeData(artEntries);
    res.redirect('/');
});


module.exports = router;
