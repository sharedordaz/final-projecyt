const sequenceGenerator = require('./sequenceGenerator');
const express = require("express");
const Hotel = require('../models/hotels');

const router = express.Router();

router.post("/", (req, res, next) => {

  const maxHotelId = sequenceGenerator.nextId("hotels");
  const hotel = new Hotel({
    id: maxHotelId,
    imageUrl: req.body.imageUrl,
    hotelTitle: req.body.hotelTitle,
    hotelText: req.body.hotelText,
    phone: req.body.phone,
    email: req.body.email,
    hotelUrl: req.body.hotelUrl
  });
  hotel.save().then(createdHotel => {
    res.status(201).json({
      message: 'Hotel added succesfully',
      hotelId: createdHotel._id
    });
  });

});

// Send PUT request to mongoDB
router.put('/:id', (req, res, next) => {
  Hotel.findOne({id: req.params.id})
    .then(hotel => {
      hotel.imageUrl = req.body.imageUrl,
      hotel.hotelTitle = req.body.hotelTitle,
      hotel.hotelText = req.body.hotelText,
      hotel.phone = req.body.phone,
      hotel.email = req.body.email,
      hotel.hotelUrl = req.body.hotelUrl

    // Update MongoDB
    Hotel.updateOne({ id: req.params.id }, hotel)
        .then(result => {
          res.status(204).json({
            message: 'Hotel Details updated successfully'
          })
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
      });
    })
    .catch(error => {
      res.status(404).json({
        message: 'Hotel not found.',
        error: { document: 'Hotel not found', error}
      });
    });
});



router.get('',(req, res, next) => {

  Hotel.find()
    .then(hotels => {
      // console.log(hotels);
      res.status(200).json({
        // message: 'Sun Hotels fetched succesfully',
        hotels: hotels
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Error fetching messages, try again',
        error: error
      });
    });
});

// Delete method collections
router.delete("/:id", (req, res, next) => {
  Hotel.findOne({ id: req.params.id })
    .then(hotel => {
      Hotel.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({
            message: "Hotel deleted successfully"
          });
        })
        .catch(error => {
           res.status(500).json({
           message: 'An error occurred',
           error: error
         });
        })
    })
    .catch(error => {
      res.status(500).json({
        message: 'Hotel not found.',
        error: { document: 'Hotel not found', error}
      });
    });
});

// router.get("/:id", (req, res, next ) => {
//   Post.findById(req.params.id)
//   .then(post => {
//     if (post) {
//       res.status(200).json(post);
//     } else {
//       res.status(404).json({message: 'post not found'});
//     }
//   });
// });

module.exports = router;
