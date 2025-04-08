const webRouter = require('express').Router();
const {get, getById} = require('../../db/crud');

// Home route
webRouter.get('/', (req, res) => {
    const artEntries = get('./db/db.json');
    res.render('index', { title: 'Artispire - Home', artEntries });
});

//Handle form for adding new art
webRouter.get('/add', (req, res) => {
    res.render('add', { title: 'Add New Art' });
});

//Handle editing art forms
webRouter.get('/edit/:id', (req, res) => {
    const artEntry = getById(req.params.id, './db/db.json');
    if (artEntry) {
        res.render('edit', { title: 'Edit Art Entry', artEntry });
    } else {
        res.status(404).send('Art entry not found');
    }
});

module.exports = webRouter;