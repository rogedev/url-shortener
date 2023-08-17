const { getShortUrlInDb } = require("../database/shortUrl/getShortUrlInDb")
async function getUrlFromShortUrl(shortUrl) {
  const shortUrlInDb = await getShortUrlInDb(shortUrl)
  return shortUrlInDb.originalUrl
}

module.exports = { getUrlFromShortUrl }
