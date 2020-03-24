const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        trim: true, 
        required: "String Is Required"
    },
    name: {
        type: String,
        trim: true, 
        required: "String Is Required"
    }, 
    weight: {
        type: Number,
        unique: true,
        //required: true
        type: Number,
    },  
    sets: {
        unique: true,
        //required: true
    }, 
    reps: {
        type: Number,
        unique: true,
        // required: true
    }, 
    duration: {
        type: Number,
        unique: true,
        // required: true
    },
    distance: {
        type: Number,
        unique: true,
        // required: true
    },
    userCreated: {
        type: Date,
        default: Date.now
      },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;