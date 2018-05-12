const
// @ MODULES
  express = require('express'),
  path = require('path'),
  moment = require('moment'),

// @ INITIALIZATION
  app = express(),
  port = process.env.PORT || 3000;


app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp;
  res.send( parseTimestampJSON(timestamp) );
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



const parseTimestampJSON = (timestamp) => {
  let result = {
    unix: null,
    natural: null
  }

  // @ VALID UNIX PARAMETER
  if (!isNaN(parseInt(timestamp))) {
    result.natural = moment.unix(timestamp).format("MMMM D, YYYY");
    result.unix = timestamp;
  }

  // @ VALID NATURAL LANGUAGE PARAMETER
  else if (moment(timestamp).isValid()) {
    let date = moment(timestamp).format("MMMM D, YYYY");
    result.natural = date;
    result.unix = moment(date).unix();
  }

  return result;
}
