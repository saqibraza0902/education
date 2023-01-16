const router = require('express').Router()
const CoursesCtrl = require("../Controllers/CoursesCtrl")

router.get('/get-course', CoursesCtrl.getCourse)
router.post('/post-course', CoursesCtrl.postCourse)


module.exports = router