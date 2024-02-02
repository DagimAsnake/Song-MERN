const express = require('express');
const {
    getTotalCountsCtrl,
    getSongsByGenreCountCtrl,
    getSongsAlbumsByArtistCountCtrl,
    getSongsByAlbumCountCtrl
} = require('../controllers/songStatController.js');

const songStatRoutes = express.Router();

songStatRoutes.get('/total-counts', getTotalCountsCtrl);
songStatRoutes.get('/songs-by-genre-count', getSongsByGenreCountCtrl);
songStatRoutes.get('/songs-albums-by-artist-count', getSongsAlbumsByArtistCountCtrl);
songStatRoutes.get('/songs-by-album-count', getSongsByAlbumCountCtrl);

module.exports = songStatRoutes;