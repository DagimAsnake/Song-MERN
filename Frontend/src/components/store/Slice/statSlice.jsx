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
  albSong: [],
  isTotalStatisticsLoading: false,
  isGenreSongLoading: false,
  isArtSongAlbumLoading: false,
  isAlbSongLoading: false
};

const statSlice = createSlice({
  name: 'stat',
  initialState: initialStatState,
  reducers: {
    getTotalStatFetch(state) {
      state.isTotalStatisticsLoading = true
    },
    totalStat(state, action) {
      const { songs, artists, albums, genres } = action.payload;
      state.totalStatistics = {
        songs: songs,
        artists: artists,
        albums: albums,
        genres: genres,
      };
    },
    getGenreStatFetch(state) {
      state.isGenreSongLoading = true
    },
    genreStat(state, action) {
      state.genreSong = action.payload;
    },
    getArtStatFetch(state) {
      state.isArtSongAlbumLoading = true
    },
    artStat(state, action) {
      state.artSongAlbum = action.payload;
    },
    getAlbFetch(state) {
      state.isAlbSongLoading = true
    },
    albStat(state, action) {
      state.albSong = action.payload;
    },
  },
});

export const { getTotalStatFetch, getGenreStatFetch, getArtStatFetch, getAlbFetch, totalStat, genreStat, artStat, albStat } = statSlice.actions;
export default statSlice.reducer;
