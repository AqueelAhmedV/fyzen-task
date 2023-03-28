const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
const bodyParser = require('body-parser')
const users = require('./routes/api/users')

const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const db = require('./config/keys').mongoUri

mongoose.connect(db)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.use('/api/users', users)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server running on port "+port))