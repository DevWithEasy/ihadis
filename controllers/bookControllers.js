const Book = require("../models/Book")
const Category = require("../models/Category")
const Chapter = require("../models/Chapter")
const Hadith = require("../models/Hadith")
const HadithForCategory = require("../models/HadithForCategory")
const Section = require("../models/Section")
const SubCategory = require("../models/SubCategory")
const Validity = require("../models/Validity")
const Writer = require("../models/Writer")

exports.getHomeData = async(req, res, next) => {
    try {
        const books = await Book.find({}).sort({id : 1})
        const hadithForCat = await HadithForCategory.find({})
        const findcategories = await Category.find({}).sort({id : 1})
        const categories = []
        findcategories.forEach(category =>{
            const findHadith = hadithForCat.filter(item=>item.cat_id === category.id).length
            categories.push({
                ...category._doc,
                number_of_hadis : findHadith
            })
        })

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : {
                books,
                categories
            }
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}
exports.getBookChapters = async(req, res, next) => {
    try {
        
        const chapters = await Chapter.find({book_id : req.params.id}).sort({chapter_id : 1})
        
        res.status(200).json({
            success : true,
            status : 200,
            message : 'Chapters found',
            data : chapters
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}

exports.getHadithByChapter = async(req, res, next) => {
    try {
        const findHadiths = await Hadith.find({book_id: req.params.id , chapter_id : req.params.chapterId}).sort({hadith_id : 1})

        const hadiths =[]

        await Promise.all(
            findHadiths.map(async(hadith)=>{
                const section = await Section.findOne({section_id : hadith.section_id ,book_id : hadith.book_id,chapter_id : hadith.chapter_id})
                hadiths.push({
                    ... hadith._doc,...section._doc
                })
            })
        )

        hadiths.sort((a,b)=> a - b)

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Hadiths found',
            data : hadiths
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}

exports.getAllBooks = async(req, res, next) => {
    try {
        Book.find()
        Category.find()
        Chapter.find()
        // const books = await Book.find({})
        // res.status(200).json({
        //     success : true,
        //     status : 200,
        //     message : 'Books found',
        //     data : books
        // })
    } catch (error) {
        res.status(500).json({
            success : false,
            status : 500,
            message : error.message,
            data : {}
        })
    }
}