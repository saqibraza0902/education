const Courses = require("../Modals/Courses");
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

const CoursesCtrl = {
    getCourse: async (req, res) => {
        try {
            const PAGE_SIZE = 8
            const page = parseInt(req.query.page || 0);
            const total = await Courses.countDocuments({});
            const course = await Courses.find().sort({ _id: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page)
            const totalPage = Math.ceil(total / PAGE_SIZE)
            return res.status(200).send({ course, totalPage })
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    postCourse: async (req, res) => {
        try {
            const { courseTitle, category, description, advisor, time, lectures } = req.body
            const file = req.files.photo
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                const event = new Courses({
                    courseTitle: courseTitle,
                    category: category,
                    description: description,
                    advisor: advisor,
                    time: time,
                    lectures: lectures,
                    image: result.url
                })
                event.save()
                return res.status(200).json({ message: "Course Posted" })
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CoursesCtrl