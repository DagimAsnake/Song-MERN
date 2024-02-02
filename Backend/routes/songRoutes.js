const express = require('express');
const {
  createSongCtrl,
  getAllSongsCtrl,
  getSongByIdCtrl,
  updateSongByIdCtrl,
  deleteSongByIdCtrl
} = require('../controllers/songController.js');

const songRoutes = express.Router();

songRoutes.post('/', createSongCtrl);
songRoutes.get('/', getAllSongsCtrl);
songRoutes.get('/:id', getSongByIdCtrl);
songRoutes.put('/:id', updateSongByIdCtrl);
songRoutes.delete('/:id', deleteSongByIdCtrl);

module.exports = songRoutes;
