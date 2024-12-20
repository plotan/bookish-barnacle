const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello, update!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
