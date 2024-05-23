const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    name: String,
    animal_type: String,
    breed: String,
    age: Number,
    house_trained: {
        type: String,
        enum:['yes','no']
    }

});

module.exports = mongoose.model('Animal', animalSchema);
