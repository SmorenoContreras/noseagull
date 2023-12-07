const mongoose = require('mongoose');


mongoose.connect('', { //put your Mongodb URL Connection
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


module.exports = mongoose.connection;
