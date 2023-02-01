// January 31 2023
// Note taking app delux
// Deployed on Heroku
// New file server.js
const express = require('express');
const path = require('path');
const localapi = require('./routes/index.js');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/firstapi', localapi);

app.use(express.static('public'));

// Joining index.html with notes.html
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
    );

app.get('notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => 
    {
        console.log("Test at get request for /api/notes for insomnia")
    });


app.post('/api/notes', (req, res) => 
{
    console.log("Test at post request for /api/notes for insomnia")
});

app.listen(PORT, () =>
    console.log(`Listening at http://localhost:${PORT}`)
);