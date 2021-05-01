const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello world asads</h1>')
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port ${port}`));