const mongoose = require('mongoose');

const InstructorSchema = mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    vision: { type: String, required: true },
    image: { type: String, required: true }

})
module.exports = Instructor = mongoose.model('instructor', InstructorSchema)