const Song = require('../model/Song.js');
const asyncHandler = require('express-async-handler');

module.exports.createSongCtrl = asyncHandler(async (req, res) => {
  const { title, artist, album, genre } = req.body;

  const song = await Song.create({
    title,
    artist,
    album,
    genre,
  });

  res.status(201).json({
    status: 'success',
    message: 'Song created Successfully',
    data: song,
  });
});

module.exports.getAllSongsCtrl = asyncHandler(async (req, res) => {
  const songs = await Song.find();

  res.status(200).json({
    status: 'success',
    data: songs,
  });
});

module.exports.getSongByIdCtrl = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const song = await Song.findById(id);

  if (!song) {
    return res.status(404).json({
      status: 'error',
      message: 'Song not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: song,
  });
});

module.exports.updateSongByIdCtrl = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, artist, album, genre } = req.body;

  const song = await Song.findByIdAndUpdate(
    id,
    {
      title,
      artist,
      album,
      genre,
    },
    { new: true }
  );

  if (!song) {
    return res.status(404).json({
      status: 'error',
      message: 'Song not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Song updated successfully',
    data: song,
  });
});

module.exports.deleteSongByIdCtrl = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const song = await Song.findByIdAndDelete(id);

  if (!song) {
    return res.status(404).json({
      status: 'error',
      message: 'Song not found',
    });
  }

  res.status(200).json({
    status: 'success',
    message: 'Song deleted successfully',
    data: song,
  });
});
