const express = require('express');
const noteController = express.Router();
const Note = require('./note')

// CREATES A NEW NOTE
noteController.post('/', async (req, res, next) => {
  const note = await Note.create(req.body)
  res.status(200).send(note)
})

// RETURNS ALL THE NOTES IN THE DATABASE
noteController.get('/', async (req, res, next) => {
  const notes = await Note.find()
  res.status(200).send(notes)
})

module.exports = noteController