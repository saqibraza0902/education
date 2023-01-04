const Faqs = require("../Modals/Faqs")

const FaqsCtrl = {
    postFaqs: async (req, res) => {
        try {
            const { name, email, message } = req.body
            const faq = new Faqs({ name: name, email: email, message: message })
            faq.save()
            return res.status(200).json({ message: "Event Posted", status: 1 })
        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}
module.exports = FaqsCtrl