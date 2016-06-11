var express = require('express');
var app = express();

// Node.js has its own capabilities for making API calls, but it's quite verbose
// I could do the API call using the 'request' module here, but I chose to 
// make the call on the Angualar side using the $http service 

// Serve static files in the webapps directory
app.use('/webapps', express.static('webapps'));

// Listens for connections; The API call above can be done without Express;
// For this example, it's used just to host the files in '/webapps'
app.listen(4000, function() {
  console.log('Express Server listening on port 4000');
});


