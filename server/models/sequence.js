const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
  maxHotelId: {type: String},
  maxResortId: {type: String},
  maxGardenCourtId: {type: String}
});

module.exports = mongoose.model('Sequences', sequenceSchema);
