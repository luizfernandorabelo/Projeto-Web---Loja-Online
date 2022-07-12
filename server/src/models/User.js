const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  personalInfo: {
    name: String,
    email: String,
    password: String,
    CPF: String,
    telephone: String,
    gender: String,
  },
  address: {
    cep: String,
    city: String,
    district: String,
    street: String,
    number: Number,
    complement: String,
  },
  card: {
    number: String,
    holderName: String,
    holderCPF: String,
    billingAddress: String,
    expiringDate: String,
  },
  cart: {
    items: [Object],
    cep: String,
    deliveryFee: Number,
  },
});

module.exports = mongoose.model('User', userSchema);
