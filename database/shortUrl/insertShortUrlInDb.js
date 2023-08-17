const mongodb = require("../mongodb")
const { ShortUrl } = require("./ShortUrl")
const { newShortUrl } = require("../../services/newShortUrl")

async function insertShortUrlInDb(originalUrl) {
  await mongodb()
  const shortUrl = new ShortUrl({
    shortUrl: newShortUrl(),
    originalUrl,
  })
  await shortUrl.save()
  return shortUrl
}

module.exports = { insertShortUrlInDb }
