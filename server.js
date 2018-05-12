const express = require('express'), app = express(),
path = require('path');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html', (err) => {console.log(err)});
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
