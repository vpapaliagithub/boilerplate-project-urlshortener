require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

// my first attempt
const handleReq = (req, res, next) => {
  console.log("handle request");
  res.json({ get: 'delete this...' });
};
app.get('/api/get', handleReq);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
