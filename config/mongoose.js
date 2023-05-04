// require the library
const mongoose = require('mongoose');

// connection establish between mongoose and contact_list_db
mongoose.connect('mongodb://127.0.0.1:27017/contactListDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// acquire the connection (to check if it is successful)
const db = mongoose.connection;

// error handling
db.on('error', console.error.bind(console, 'connection error:'));


// up and running then print message
db.once('open', function() {
    console.log('Connected to MongoDB database!');
});
