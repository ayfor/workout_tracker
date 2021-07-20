const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        trim: true,
        required: "Enter the type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this workout"
    },
    duration: {
        type: Number,
        required: "Enter an amount"
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
