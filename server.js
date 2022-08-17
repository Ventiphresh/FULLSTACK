// .env is an environmet variable for the url path of the server
// if we are running local code use the require statement for the env file
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' })
  }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

// Import starting page render
const indexRouter = require('./routes/index')
// Import authors page render
const authorRouter = require('./routes/authors')


app.set('view engine', 'ejs')

// Where server views come from
app.set('views', __dirname + '/views')
// Where header and footer layouts come from
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
// Where Javascript, Styles, and Images come from
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

const mongoose = require('mongoose')
// Url for Mongoose to connect to server. Either local or hosted
mongoose.connect(process.env.DATABASE_URL)

// Datebase connection variable
const db = mongoose.connection
// Error if connection fails
db.on('error', error => {
    console.error(error)
})
// Succesful connection
db.once('open', () => {
    console.log('Connected to Mongoose')
})

// Use starting page render
app.use('/', indexRouter)
// Use authors page render
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 3000)