const mongoose = require('mongoose');

// sun-hotels schema
const hotelSchema = mongoose.Schema({
  id: {type: String, required: true},
  imageUrl: {type: String, required: true},
  hotelTitle: {type: String, required: true},
  hotelText: {type: String, required: true},
  phone: {type: String, required: true},
  email: {type: String, required: true},
  hotelUrl: {type: String, required: true}
});

module.exports = mongoose.model('Hotel', hotelSchema);
