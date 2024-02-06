import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Song {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

interface SongState {
  songs: Song[];
  genreSongs: Song[];
  selectedSong: Song | null;
}

const initialSongState: SongState = { songs: [], genreSongs: [], selectedSong: null };

const songSlice = createSlice({
  name: 'song',
  initialState: initialSongState,
  reducers: {
    addSong(state, action: PayloadAction<Song>) {
      const { title, artist, album, genre } = action.payload;
      const newSong = { _id: "1", title, artist, album, genre };
      state.songs.push(newSong);
    },
    getAllSong(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
    },
    getGenreSong(state, action: PayloadAction<Song[]>) {
      state.genreSongs = action.payload;
    },
    getOneSong(state, action: PayloadAction<Song | null>) {
      state.selectedSong = action.payload;
    },
    deleteSong(state, action: PayloadAction<string>) {
      const songId = action.payload;
      state.songs = state.songs.filter((song) => song._id !== songId);
      if (state.selectedSong && state.selectedSong._id === songId) {
        state.selectedSong = null;
      }
    },
    updateSong(state, action: PayloadAction<{ id: string, title: string, artist: string, album: string, genre: string }>) {
      const { id, title, artist, album, genre } = action.payload;
      const editSong = state.songs.find((song) => song._id === id);
      if (editSong) {
        editSong.title = title;
        editSong.artist = artist;
        editSong.album = album;
        editSong.genre = genre;
      }
    },
  },
});

export const {
  addSong,
  getAllSong,
  getGenreSong,
  getOneSong,
  deleteSong,
  updateSong,
} = songSlice.actions;
export default songSlice.reducer;
