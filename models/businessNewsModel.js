const mongoose = require('mongoose');

const businessNewsSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please provide a title.'] },
  summary: { type: String, required: [true, 'Please provide a summary'] },
  date: { type: Date, required: [true, 'Please provide a date'] },
  image: { type: String, required: [true, 'Please provide an image'] },
});

const BusinessNews = mongoose.model('BusinessNews', businessNewsSchema);

module.exports = BusinessNews;