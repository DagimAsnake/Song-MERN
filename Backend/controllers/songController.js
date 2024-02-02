const Song = require('../model/Song.js');
const asyncHandler = require('express-async-handler');

module.exports.createSongCtrl = asyncHandler(async (req, res) => {
    const { title, artist, album, genre } = req.body;

    const song = await Song.create({
      title,
      artist,
      album,
      genre
    });
  
    res.status(201).json({
      status: 'success',
      message: 'Song created Successfully',
      data: song
    });
  });