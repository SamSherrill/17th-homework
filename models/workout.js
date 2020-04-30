const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            required: "A workout type is required",
        },
        name: {
            type: String,
            trim: true,
            required: "Enter a name for your workout"
        },
        duration: {
            type: Number,
            required: "Enter a duration"
        },
        weight: {
            type: Number,
            // required: "Enter a weight"
        },
        reps: {
            type: Number,
            // required: "Enter the number of reps"
        },
        sets: {
            type: Number,
            // required: "Enter the number of sets"
        },
        distance: {
            type: Number,
        }
    }]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;