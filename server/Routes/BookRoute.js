const router = require('express').Router()
const BooksCtrl = require("../Controllers/BooksCtrl")

router.get('/get-books', BooksCtrl.getBook)
router.get('/feed-books', BooksCtrl.getFeedBooks)
router.post('/upload', BooksCtrl.postBook)

module.exports = router