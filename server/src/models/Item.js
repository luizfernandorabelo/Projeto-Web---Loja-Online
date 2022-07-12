const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: String,
  images: [String],
  description: String,
  categories: [String],
  rating: {
    totalStars: Number,
    feedbacks: [Object],
  },
  stock: Number,
});

module.exports = mongoose.model('Item', itemSchema);
