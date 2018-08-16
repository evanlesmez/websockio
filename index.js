const express = require('express');

// App setup
const app = express();
const server = app.listen(420, function(){
  console.log("Listening to requests on port 420!")
});

// Static files

app.use(express.static('public'));
