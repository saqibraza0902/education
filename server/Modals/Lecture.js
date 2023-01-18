const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lectureSchema = new Schema(
    {
        lecture_No: {
            type: Number,
        },
        name: {
            type: String,
        },
    },
);

module.exports = mongoose.model("Lecture", lectureSchema);