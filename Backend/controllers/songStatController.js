const Song = require('../model/Song.js');
const asyncHandler = require('express-async-handler');

module.exports.getTotalCountsCtrl = asyncHandler(async (req, res) => {
    const totalCounts = await Song.aggregate([
        {
            $group: {
                _id: null,
                songs: { $sum: 1 },
                artists: { $addToSet: '$artist' },
                albums: { $addToSet: '$album' },
                genres: { $addToSet: '$genre' }
            }
        },
        {
            $project: {
                _id: 0,
                songs: 1,
                artists: { $size: '$artists' },
                albums: { $size: '$albums' },
                genres: { $size: '$genres' }
            }
        }
    ]);

    res.status(200).json({
        status: 'success',
        data: totalCounts[0] // Since we grouped by null, totalCounts will contain only one element
    });
});



module.exports.getSongsByGenreCountCtrl = asyncHandler(async (req, res) => {
    const songsByGenre = await Song.aggregate([
        {
            $group: {
                _id: '$genre',
                count: { $sum: 1 }
            }
        }
    ]);

    const songsByGenreCount = songsByGenre.map(genre => ({
        genre: genre._id,
        songCount: genre.count
    }));

    res.status(200).json({
        status: 'success',
        data: songsByGenreCount
    });
});


module.exports.getSongsAlbumsByArtistCountCtrl = asyncHandler(async (req, res) => {
    const songsAlbumsByArtist = await Song.aggregate([
        {
            $group: {
                _id: '$artist',
                songsCount: { $sum: 1 },
                albumsCount: { $addToSet: '$album' }
            }
        },
        {
            $project: {
                _id: 0,
                artist: '$_id',
                songsCount: 1,
                albumsCount: { $size: '$albumsCount' }
            }
        }
    ]);

    res.status(200).json({
        status: 'success',
        data: songsAlbumsByArtist
    });
});


module.exports.getSongsByAlbumCountCtrl = asyncHandler(async (req, res) => {
    const songsByAlbum = await Song.aggregate([
        {
            $group: {
                _id: '$album',
                count: { $sum: 1 }
            }
        }
    ]);

    const songsByAlbumCount = songsByAlbum.map(album => ({
        album: album._id,
        songCount: album.count
    }));

    res.status(200).json({
        status: 'success',
        data: songsByAlbumCount
    });
});