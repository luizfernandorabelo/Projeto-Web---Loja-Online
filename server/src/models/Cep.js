const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cepSchema = new Schema({
  fee: {
    type: Number,
    required: true,
  },
  days: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Cep', cepSchema);
