const express = require('express');
const path = require('path');
const app = express();
const api = require('./routes/notes');
// const api = require('./routes/index.js')

// Set static folder
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static(path.join(__dirname, 'public')))


//GET Route for notes.html
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//GET Route for index.html
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));