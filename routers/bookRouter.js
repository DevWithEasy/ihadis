const { getAllBooks, getHomeData } = require('../controllers/bookControllers')

const router = require('express').Router()

router.get('/Home',getHomeData)
    .get('/all',getAllBooks)
module.exports = router