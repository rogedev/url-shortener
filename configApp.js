const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")

function configApp(app) {
  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use("/public", express.static(__dirname + "/public"))
}

module.exports = { configApp }
