const { Schema, model } = require("mongoose")

const shortUrlSchema = new Schema(
  {
    shortUrl: String,
    originalUrl: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

const ShortUrl = model("shortUrl", shortUrlSchema)

module.exports = { ShortUrl }
