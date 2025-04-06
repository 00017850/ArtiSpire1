const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const webRoutes = require('./routes/web');
app.use('/', webRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
