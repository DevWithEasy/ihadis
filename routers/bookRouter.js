const { getAllBooks, getHomeData, getBookChapters, getHadithByChapter, goToHadith, searchHadith } = require('../controllers/bookControllers')

const router = require('express').Router()

router.get('/Home',getHomeData)
    .get('/chapter/:id',getBookChapters)
    .get('/hadith/:id/:chapterId',getHadithByChapter)
    .get('/hadith/find/:bookId/:hadithId',goToHadith)
    .get('/all',getAllBooks)
    .get('/search',searchHadith)
module.exports = router