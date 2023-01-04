const mongoose = require('mongoose');

const FaqSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
})
const Faqs = mongoose.model('faqs', FaqSchema);
module.exports = Faqs;