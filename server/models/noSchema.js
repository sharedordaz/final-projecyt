const mongoose = require('mongoose');
const { Schema } = mongoose;

/*const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  albums: { type: Array, required: false }
});*/

const noSchema = new Schema({
}, { strict: false });

const noModel = mongoose.model("noModel", noSchema)

module.exports = noModel;

/*const myModel = new noModel({ name: "Silencio" });
console.log("Hello" + myModel.name);*/


