const mongoose = require('mongoose');

// sun-hotels schema
const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  albums: { type: Array, required: false }
});

const Artist = mongoose.model('Artist', artistSchema);
