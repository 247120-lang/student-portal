const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Student Portal Running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
