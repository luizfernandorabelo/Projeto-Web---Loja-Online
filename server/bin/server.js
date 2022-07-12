const app = require('../src/app');
const http = require('http');
const mongoose = require('mongoose');

const PORT = 3000;
app.set('port', PORT);

const server = http.createServer(app);

const URI =
  'mongodb+srv://azulao:azulao123@cluster0.bspyp.mongodb.net/?retryWrites=true&w=majority';

// Database connection (100% unsafe):
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error('Error connecting to database.'));
db.once('open', () => {
  console.log('Connected to database.\nRunning on port ' + PORT);
  server.listen(PORT);
});
