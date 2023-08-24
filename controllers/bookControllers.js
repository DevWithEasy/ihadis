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
        const categories = await Category.find({}).sort({id : 1})
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