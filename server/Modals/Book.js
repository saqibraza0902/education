const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    title: { type: String, required: true },
    writer: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    rating: { type: Number },
    image: { type: String, required: true },

})
module.exports = ImageModel = mongoose.model('user', ImageSchema)