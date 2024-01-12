const { getAllBooks, getHomeData, getBookChapters, getHadithByChapter, goToHadith } = require('../controllers/bookControllers')

const router = require('express').Router()

router.get('/Home',getHomeData)
    .get('/chapter/:id',getBookChapters)
    .get('/hadith/:id/:chapterId',getHadithByChapter)
    .get('/hadith/find/:bookId/:hadithId',goToHadith)
    .get('/all',getAllBooks)
module.exports = router