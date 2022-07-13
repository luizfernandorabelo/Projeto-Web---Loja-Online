const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const itemsRoute = require('./routes/items');
const usersRoute = require('./routes/users');
const cepsRoute = require('./routes/ceps');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/items', itemsRoute);
app.use('/users', usersRoute);
app.use('/ceps', cepsRoute);

module.exports = app;
