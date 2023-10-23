const { getShortUrlInDb } = require("../database/shortUrl/getShortUrlInDb")

async function getUrlFromShortUrl(shortUrl) {
  const { originalUrl } = await getShortUrlInDb(shortUrl)
  return originalUrl
}

module.exports = { getUrlFromShortUrl }
