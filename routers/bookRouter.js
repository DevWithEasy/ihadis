const { getAllBooks, getHomeData, getBookChapters, getHadithByChapter } = require('../controllers/bookControllers')

const router = require('express').Router()

router.get('/Home',getHomeData)
    .get('/chapter/:id',getBookChapters)
    .get('/hadith/:id/:chapterId',getHadithByChapter)
    .get('/all',getAllBooks)
module.exports = router