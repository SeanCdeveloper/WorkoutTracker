const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter An Exercise Type"
            },
            name: {
                type: String, 
                trim: true,
                required: "Enter An Exercise Name"
            },
            duration: {
                type: Number,
                required: "Enter An Exercise Duration, In Minutes."
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            }, 
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }, 
            userCreated: {
                type: Date, 
                default: () => new Date()
            },
            lastUpdated: Date
        }
    ]
});

WorkoutSchema.methods.lastUpdatedDate = function() {
    this.lastUpdated = Date.now();
    return this.lastUpdated;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

