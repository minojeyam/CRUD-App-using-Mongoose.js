const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mino:mino@cluster1.7jewq.mongodb.net/rest-API?retryWrites=true&w=majority');
// update the promises of the mongoose as the global promise
mongoose.Promise = global.Promise;

// dd support to serve static files
app.use(express.static('public'));

// Express parser to parse the data sent or received from the database
app.use(express.json());

// set up the app to use the new api.js file we would create to hold our all four operations
app.use('/api',require('./routes/api'));

// Initilizing routes
app.get('/api', (req, res) => res.send('Its working!'));

// Error Handling Middleware
app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
   console.log('now listening for requests');
});
