import { createSlice } from '@reduxjs/toolkit';

const initialStatState = {
  totalStatistics: {
    songs: 0,
    artists: 0,
    albums: 0,
    genres: 0,
  },
  genreSong: [],
  artSongAlbum: [],
  albSong: []
};

const statSlice = createSlice({
  name: 'stat',
  initialState: initialStatState,
  reducers: {
    totalStat(state, action) {
      const { songs, artists, albums, genres } = action.payload;
      state.totalStatistics = {
        songs: songs,
        artists: artists,
        albums: albums,
        genres: genres,
      };
    },
    genreStat(state, action) {
        state.genreSong = action.payload;
    },
    artStat(state, action) {
        state.artSongAlbum = action.payload;
    },
    albStat(state, action) {
        state.albSong = action.payload;
    }
  },
});

export const { totalStat, genreStat, artStat, albStat } = statSlice.actions;
export default statSlice.reducer;
