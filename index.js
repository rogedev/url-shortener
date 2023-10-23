const express = require("express")
const { config } = require("./config")
const { api } = require("./src/api")

const app = express()
config(app)
api(app)
