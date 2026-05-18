const express = require('express');
const app = express();
const PORT = 3000; // or whatever port you want

app.get('/', (req, res) => {
  res.send('Global Kitchen API is running!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
