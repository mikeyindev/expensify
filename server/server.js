const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// Serve the static file index.html
app.use(express.static(publicPath));
// For all paths, send back the same index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running!');
});