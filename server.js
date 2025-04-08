const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes/');

// setting up view engine, js and css file directories
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// I am using this to be able to extract data from request body
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
