const uuid = require("uuid")

function newShortUrl() {
  return uuid.v4()
}

module.exports = { newShortUrl }
