const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const { getUrlFromShortUrl } = require("./services/getUrlFromShortUrl")
const { getShortUrlFromUrl } = require("./services/getShortUrlFromUrl")
const { isValidUrl } = require("./services/isValidUrl")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/public", express.static(__dirname + "/public"))

const PORT = process.env.PORT || 3030

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))

app.get("/", (req, res) => res.sendFile(__dirname + "/views/index.html"))

app.post("/api/shorturl", async (req, res) => {
  const { url } = req.body

  if (!isValidUrl(url)) return res.send({ error: "invalid url" })

  const shortUrl = await getShortUrlFromUrl(url)

  return res.status(200).send({ original_url: url, short_url: shortUrl })
})

app.get("/api/shorturl/:shortUrl", async (req, res) => {
  const originalUrl = await getUrlFromShortUrl(req.params.shortUrl)

  if (!originalUrl) res.status(400).send({ error: "invalid shortUrl" })

  res.redirect(301, originalUrl)
})
