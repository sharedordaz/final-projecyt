const router = require('express').Router();
const path = require('path');

const jsonparser = express.json();
const urlparser = express.urlencoded({ extended: true });


router.get("/", (req, res, next) => {


});

//----------------------------------------/

module.exports = router;
