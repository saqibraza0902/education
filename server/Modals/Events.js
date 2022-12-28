const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    eventTitle: { type: String, required: true },
    speaker: { type: String, required: true },
    date: { type: String, required: true },
    month: { type: String, required: true },
    StartTime: { type: String, required: true },
    EndTime: { type: String, required: true },
    detail: { type: String, required: true },
})
const Events = mongoose.model('event', EventSchema);
module.exports = Events;