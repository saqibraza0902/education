const Events = require("../Modals/Events");
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

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
            const { eventTitle, speaker, date, month, StartTime, EndTime, detail } = req.body
            const file = req.files.photo
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                const event = new Events({
                    eventTitle: eventTitle,
                    speaker: speaker,
                    date: date,
                    month: month,
                    StartTime: StartTime,
                    EndTime: EndTime,
                    detail: detail,
                    image: result.url
                })
                event.save()
                return res.status(200).json({ message: "Book Posted" })
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = EventsCtrl