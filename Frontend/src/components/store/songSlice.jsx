import { createSlice } from '@reduxjs/toolkit';

const initialSongState = { songs: [], selectedSong: null };

const songSlice = createSlice({
  name: 'song',
  initialState: initialSongState,
  reducers: {
    addSong(state, action) {
      const { title, artist, album, genre } = action.payload;
      const newSong = { title, artist, album, genre };
      state.songs.push(newSong);
    },
    getAllSong(state, action) {
      state.songs = action.payload;
    },
    getOneSong(state, action) {
      state.selectedSong = action.payload;
    },
    deleteSong(state, action) {
        const songId = action.payload;
        state.songs = state.songs.filter((song) => song.id !== songId);
        if (state.selectedSong && state.selectedSong.id === songId) {
          state.selectedSong = null;
        }
      },
    updateSong(state, action) {
        const { id, title, artist, album, genre  } = action.payload;
        const editSong = state.songs.find(song => song._id === id);
        if (editSong) {
          editSong.title = title;
          editSong.artist = artist;
          editSong.album = album;
          editSong.genre = genre;
        }
      }
  },
});

export const { addSong, getAllSong, getOneSong, deleteSong, updateSong } = songSlice.actions;
export default songSlice.reducer;