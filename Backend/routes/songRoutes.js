const express = require('express');
const {
  createSongCtrl,
} = require('../controllers/songController.js');

const songRoutes = express.Router();

songRoutes.post('/',  createSongCtrl);

module.exports = songRoutes;
