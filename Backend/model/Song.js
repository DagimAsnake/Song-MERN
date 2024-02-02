const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      default: "Unknown"
    },
    genre: {
      type: String,
      enum: ['Rock', 'Pop', 'Hip Hop', 'Jazz', 'Classical', 'Electronic', 'Other']
    },
  },
  {
    timestamps: true,
  }
);

const Song = mongoose.model('Song', SongSchema);
module.exports = Song;
