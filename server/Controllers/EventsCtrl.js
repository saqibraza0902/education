const Events = require("../Modals/Events");


const EventsCtrl = {
    getEvents: async (req, res) => {
        try {
            const PAGE_SIZE = 6
            const page = parseInt(req.query.page || 0);
            const total = await Events.countDocuments({});
            const events = await Events.find().sort({ _id: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
            const totalPage = Math.ceil(total / PAGE_SIZE)
            return res.status(200).send({ events, totalPage })
            // return res.send(events)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    postEvent: async (req, res) => {
        try {
            const { title, speaker, date, month, StartTime, EndTime, detail } = req.body
            const event = new Events({
                eventTitle: title, speaker: speaker,
                date: date, month: month, StartTime: StartTime,
                EndTime: EndTime, detail: detail
            })
            event.save()
            return res.status(200).json({ message: "Event Posted" })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = EventsCtrl