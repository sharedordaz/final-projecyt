const router = require('express').Router();
const path = require('path');

const Artist = require("./models/artists.js");

//const jsonparser = express.json();
//const urlparser = express.urlencoded({ extended: true });


router.get("/artists", async (req, res, next) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch artists' });
  }


});

//----------------------------------------/

module.exports = router;
