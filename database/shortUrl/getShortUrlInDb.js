const mongodb = require("../mongodb")
const { ShortUrl } = require("./ShortUrl")

async function getShortUrlInDb(shortUrl) {
  await mongodb()
  const shortUrlInDb = await ShortUrl.findOne({ shortUrl })
  return shortUrlInDb
}

module.exports = { getShortUrlInDb }
