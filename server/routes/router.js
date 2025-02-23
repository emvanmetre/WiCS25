const express = require('express')
const router = express.Router()
const schemas = require('../models/schemas')

router.post('/post', async (req, res) => {
  const { name, id, html, css, js } = req.body
  const componentData = { name: name, id: id, html: html, css: css, js: js }
  const newComponent = new schemas.Component(componentData)
  const saveComponent = await newComponent.save()
  if (saveComponent) {
    res.send('Component successfully saved!')
  }
  res.end()
})
