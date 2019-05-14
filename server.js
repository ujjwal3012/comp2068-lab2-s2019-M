// Require in express
const express = require('express');
// init express application
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

const validOptions = ['add', 'subtract', 'multiply', 'divide'];
// Listen to port 3000
app.listen(PORT);
console.log(`Application is listening on http://localhost:${PORT}`);
