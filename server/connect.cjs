const { MongoClient } = require('mongodb')
require('dotenv').config({ path: './config.env' })

const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bouquet', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function main() {
  const db = process.env.ATLAS_URI
  const client = new MongoClient(db)

  try {
    await client.connect()

    const collections = await client.db('Bouquet').listCollections()
    console.log(collections)
    // collections.forEach(collection => console.log(collection.s.namespace.collection))
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}
