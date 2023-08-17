const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const MONGO_URI = process.env.MONGO_URI
const dbName = process.env.DB_NAME

const mongodb = () =>
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName,
  })

module.exports = mongodb
