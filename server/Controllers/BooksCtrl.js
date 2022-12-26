const Book = require("../Modals/Book");
const cloudinary = require("cloudinary").v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})
const BooksCtrl = {
    getBook: async (req, res) => {
        try {
            const PAGE_SIZE = 8
            const page = parseInt(req.query.page || 0);
            const total = await Book.countDocuments({});
            const book = await Book.find().sort({ _id: -1 }).limit(PAGE_SIZE).skip(PAGE_SIZE * page)

            console.log(total)
            const totalPage = Math.ceil(total / PAGE_SIZE)
            return res.status(200).send({ book, totalPage })
            // return res.json({ totalPage: totalPage })

        } catch (error) {
            console.log(error)
        }
    },
    getFeedBooks: async (req, res) => {
        try {

            const book = await Book.find().sort({ _id: -1 }).limit(4)
            console.log(book)
            return res.send(book)
        } catch (error) {
            console.log(error)
        }
    },

    postBook: async (req, res) => {
        try {
            const { title, writer, price, rating, desc } = req.body
            const file = req.files.photo
            cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
                const user = new Book({
                    title: title,
                    writer: writer,
                    price: price,
                    desc: desc,
                    rating: rating,
                    image: result.url
                })
                user.save()
                return res.status(200).json({ message: "Book Posted" })
            })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = BooksCtrl

