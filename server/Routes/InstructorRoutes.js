const router = require('express').Router()
const InstructorCtrl = require("../Controllers/InstructorCtrl")

router.get('/get-instructor', InstructorCtrl.getInstructor)
router.post('/post-ins', InstructorCtrl.postInstructor)

module.exports = router