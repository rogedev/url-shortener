const express = require("express")
const { configApp } = require("./configApp")
const { api } = require("./src/api")

const app = express()
configApp(app)
api(app)
