const mongoose = require('mongoose');
const User = require('../src/models/User');

// Database connection (100% not safe):
mongoose.connect(
  `mongodb+srv://azulao:azulao123@cluster0.bspyp.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log('connected');
  },
  (err) => {
    console.error(err);
  }
);
