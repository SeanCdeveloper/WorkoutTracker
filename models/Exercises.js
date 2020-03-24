const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
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

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;