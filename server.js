const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('TEST');
});


const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));