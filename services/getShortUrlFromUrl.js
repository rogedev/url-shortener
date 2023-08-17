const {
  insertShortUrlInDb,
} = require("../database/shortUrl/insertShortUrlInDb")

async function getShortUrlFromUrl(url) {
  const newShortUrl = await insertShortUrlInDb(url)
  return newShortUrl.shortUrl
}

module.exports = { getShortUrlFromUrl }
