const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/userRoute')
const eventRoutes = require('./routes/eventRoute')

const PORT = 5000

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/users', userRoutes)
app.use('/api/events', eventRoutes)

// connect to db
mongoose.connect('mongodb+srv://rachelk4812:mongo@cluster0.6w4gae6.mongodb.net/plannerDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log('listening for requests on port:', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 