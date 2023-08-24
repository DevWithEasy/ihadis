require('dotenv').config();
const express = require('express');
const path = require('path')
const app = express();
const applyMidleware = require('./middlewares/middlewares')
const applyRouter = require('./routers/routes');
const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middlewares/errorHandler');

app.use(function (req, res, next) {
    res.setHeader(
        'Content-Security-Policy-Report-Only',
        "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
    );
    next();
});

//serve client side file path
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, './client/dist/')))

//apply midflewares
applyMidleware(app)

//apply routes
applyRouter(app)

//database connection
dbConnection()

//error handler
errorHandler(app)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/dist/index.html'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log('server listening on port 8080')
});