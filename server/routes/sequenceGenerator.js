var Sequence = require('../models/sequence');

var maxHotelId;
var maxResortId;
var maxGardenCourtId;
var sequenceId = null;

function SequenceGenerator() {

  Sequence.findOne()
    .exec(function(err, sequence) {
      if (err) {
        return res.status(500).json({
          title: 'An error occurred',
          error: err
        });
      }

      sequenceId = sequence._id;
      maxHotelId = sequence.maxHotelId;
      maxResortId = sequence.maxResortId;
      maxGardenCourtId = sequence.maxGardenCourtId;
    });
}

SequenceGenerator.prototype.nextId = function(collectionType) {

  var updateObject = {};
  var nextId;

  switch (collectionType) {
    case 'hotels':
      maxHotelId++;
      updateObject = {maxHotelId: maxHotelId};
      nextId = maxHotelId;
      break;
    case 'resorts':
      maxResortId++;
      updateObject = {maxResortId: maxResortId};
      nextId = maxResortId;
      break;
    case 'garden_courts':
      maxGardenCourtId++;
      updateObject = {maxGardenCourtId: maxGardenCourtId};
      nextId = maxGardenCourtId;
      break;
    default:
      return -1;
  }

  Sequence.updateOne({_id: sequenceId}, {$set: updateObject},
    function(err) {
      if (err) {
        console.log("nextId error = " + err);
        return null
      }
    });

  return nextId;
}

module.exports = new SequenceGenerator();
