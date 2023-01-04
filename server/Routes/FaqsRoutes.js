const router = require('express').Router()
const FaqsCtrl = require('../Controllers/FaqsCtrl')


router.post('/post-faqs', FaqsCtrl.postFaqs)

module.exports = router