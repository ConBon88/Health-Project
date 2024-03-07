require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")

const drugRoutes = require('./routes/drugAPI')
const userRoutes = require('./routes/user')
const reportRoutes = require('./routes/report')

//express app
const app = express()

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// middleware
app.use(express.json())
app.use(cors())

//define routes
app.use('/api/drugAPI', drugRoutes)
app.use('/api/user', userRoutes)
app.use('/api/reports', reportRoutes)

app.get('/', (req, res) => {
  res.send('This is the backend API for CS353 Team 16 - Health Hub')
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 