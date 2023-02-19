const express = require('express')
const http = require('http')
const dotenv = require('dotenv')
const cors = require("cors")
const app = express()
require('colors')
dotenv.config()

// database
require('./config/db')

// middlewares
// TODO: add only the front end origin
app.use(cors({
    credentials : true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/users', require('./routes/userRoutes'))

const server = http.createServer(app)
const port = process.env.PORT || 8000
server.listen(port, console.log(`server is running http://localhost:${port}`))
