const SubCategory = require("../models/SubCategory")

exports.getSubCategories = async(req, res, next) => {
    try {
        const data = await SubCategory.find({cat_id : req.params.id})
        console.log(data)
        res.status(200).json({
            success : true,
            status : 200,
            message : 'Books found',
            data : data
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
