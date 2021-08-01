const express = require('express');
const cors = require('cors');
const unsplash = require('./api/unsplash')
const storedLibrary = require('./api/storedLibrary')
const app = express();

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => { return res.send("test server running") });
app.get('/unsplash', (req, res) => { return res.send(unsplash) });
app.get('/storedLibrary', (req, res) => { return res.send(storedLibrary) });

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
