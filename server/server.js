const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
// To get Heroku's dynamically assigned port. If no port is assigned, default to
// 3000
const port = process.env.PORT || 3000; 

// Serve the static file index.html
app.use(express.static(publicPath));
// For all paths, send back the same index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is running!');
});