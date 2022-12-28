const router = require('express').Router()
const EventsCtrl = require("../Controllers/EventsCtrl")


router.post('/post-events', EventsCtrl.postEvent)
router.get('/get-events', EventsCtrl.getEvents)
module.exports = router