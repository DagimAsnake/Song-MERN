const express = require('express');
const {
  createSongCtrl,
  getAllSongsCtrl,
  getSongByIdCtrl,
  updateSongByIdCtrl,
  deleteSongByIdCtrl,
  getSongsByGenreCtrl
} = require('../controllers/songController.js');

const songRoutes = express.Router();

songRoutes.post('/', createSongCtrl);
songRoutes.get('/', getAllSongsCtrl);
songRoutes.get('/genre', getSongsByGenreCtrl);
songRoutes.get('/:id', getSongByIdCtrl);
songRoutes.put('/:id', updateSongByIdCtrl);
songRoutes.delete('/:id', deleteSongByIdCtrl);


module.exports = songRoutes;
