const express = require('express');
const router = express.Router();

// Home route
router.get('/', (req, res) => {
  res.render('index', { title: 'Artispire - Home' });
});

// Add Art route
router.get('/add', (req, res) => {
  res.render('add', { title: 'Add New Art' });
});

module.exports = router;
