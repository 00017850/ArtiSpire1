const express = require('express');
const path = require('path');
const fs = require('fs');  // Require the file system module
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse POST request data
app.use(express.urlencoded({ extended: true }));

// Read the mock database
const readData = () => {
    const rawData = fs.readFileSync('./mock_db.json');
    return JSON.parse(rawData);
}

// Write to the mock database
const writeData = (data) => {
    fs.writeFileSync('./mock_db.json', JSON.stringify(data, null, 2));
}

// Routes
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
