require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const applyMidleware = require('./middlewares/middlewares')
const applyRouter = require('./routers/routes');
const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorHandler');


//serve client side file path
app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'./client/dist/')))

//apply midflewares
applyMidleware(app)

//apply routes
applyRouter(app)

//database connection
dbConnection()

//error handler
errorHandler(app)

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(process.env.PORT || 8080,()=>{
    console.log('server listening on port 8080')
});