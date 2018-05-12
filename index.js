const
// @ MODULES
  express = require('express'),
  path = require('path'),
  moment = require('moment'),

// @ INITIALIZATION
  app = express(),
  port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, 'public')));




app.get('/:timeString', (req, res) => {
  //IF UNIX (NATURAL LANGUAGE FORMATTED)
  res.send( moment.unix(req.params.timeString) );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
