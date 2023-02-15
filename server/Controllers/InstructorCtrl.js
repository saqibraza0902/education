const Instructor = require("../Modals/Instructor")
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const InstructorCtrl = {

    getInstructor: async (req, res) => {
        try {
            const Inst = await Instructor.find()
            return res.status(200).send({ Inst })
        } catch (error) {
            return res.status(500).json({ error })
        }
    },
    postInstructor: async (req, res) => {
        try {
            const { name, role, vision } = req.body
            const file = req.files.photo
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                const instructoor = new Instructor({
                    name: name,
                    role: role,
                    vision: vision,
                    image: result.url
                })
                instructoor.save()
                return res.status(200).json({ message: "Teacher Posted" })
            })
        } catch (error) {
            return res.status(500).json({ error })
        }
    },

}
module.exports = InstructorCtrl