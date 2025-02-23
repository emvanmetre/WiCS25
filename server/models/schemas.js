const mongoose = require('mongoose')
const Schema = mongoose.Schema
const componentSchema = new Schema({
  name: { type: String },
  id: { type: String },
  html: { type: String },
  css: { type: String },
  js: { type: String },
})

const Components = mongoose.model('Components', componentSchema, 'Components')
const mySchemas = { Component: Components }

module.exports = mySchemas
