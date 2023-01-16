const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    courseTitle: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    advisor: { type: String, required: true },
    time: { type: String, required: true },
    lectures: { type: String, required: true },
    seats: { type: String, default: 0 },
    image: { type: String, required: true },
})
module.exports = Courses = mongoose.model('course', CourseSchema)