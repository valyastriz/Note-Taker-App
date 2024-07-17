const deleteRoute = require('express').Router();
const { readFromFile, writeFile } = require('../helpers/fsUtils');

// DELETE route for deleting notes by id
deleteRoute.delete('/:id', (req, res) => {
    const noteID = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            //make a new arrya of all notes except the one iwth the id given in the url
            const result = json.filter((note) => note.id !== noteID);
            
            //save the array to the file system
            writeFile('./db/db.json', JSON.stringify(result, null, 4));

            // respond to the DELETE request
            res.json(`Item ${noteID} has been deleted`);
        });
});

module.exports = deleteRoute;