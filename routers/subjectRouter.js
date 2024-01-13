const { getSubCategories } = require('../controllers/subjectControllers')

const router = require('express').Router()

router.get('/:id',getSubCategories)
    .get('/',)
module.exports = router