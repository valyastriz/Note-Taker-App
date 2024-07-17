const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET route for reading all the notes in db.json
notes.get('/api/notes', (req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

notes.post('/api/notes', (req, res) => {
    
})