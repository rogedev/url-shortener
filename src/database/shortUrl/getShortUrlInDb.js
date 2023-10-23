const mongodb = require("../mongodb")
const { ShortUrl } = require("./ShortUrl")

async function getShortUrlInDb(shortUrl) {
  await mongodb()
  return ShortUrl.findOne({ shortUrl })
}

module.exports = { getShortUrlInDb }
