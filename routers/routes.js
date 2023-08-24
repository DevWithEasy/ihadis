const bookRouter = require('./bookRouter')
const sunjectRouter = require('./subjectRouter')
const routers = [
    {
        path : '/api/book',
        handler : bookRouter
    },
    {
        path : '/api/subject',
        handler : sunjectRouter
    },
    // {
    //     path : '/',
    //     handler : (req,res) =>{
    //         res.send('Server is ready!');
    //     }
    // }
]

const applyRouter = (app) =>{
    routers.map(r=>{
        if(r.path === '/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}

module.exports = applyRouter