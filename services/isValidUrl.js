const urlExists = require("url-exists")

function isValidUrl(url) {
  try {
    urlExists(url, (err, exists) => {
      if (!exists) throw Error("url doesn't exists")
    })
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

module.exports = { isValidUrl }
