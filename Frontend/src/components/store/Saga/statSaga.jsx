import { call, takeEvery, put } from 'redux-saga/effects';
import { totalStat, genreStat, artStat, albStat } from '../Slice/statSlice';

function* getTotalSagaStat() {
  try {
    const response = yield call(() => fetch('http://localhost:8000/stat/total-counts'));
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put(totalStat(allSong.data));
  } catch (error) {
    console.error('Error get all song:', error);
  }
}

function* getGenreSagaStat() {
  try {
    const response = yield call(() => fetch('http://localhost:8000/stat/songs-by-genre-count'));
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put(genreStat(allSong.data));
  } catch (error) {
    console.error('Error get all song:', error);
  }
}

function* getArtSagaStat() {
  try {
    const response = yield call(() => fetch('http://localhost:8000/stat/songs-albums-by-artist-count'));
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put(artStat(allSong.data));
  } catch (error) {
    console.error('Error get all song:', error);
  }
}

function* getAlbStat() {
  try {
    const response = yield call(() => fetch('http://localhost:8000/stat/songs-by-album-count'));
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put(albStat(allSong.data));
  } catch (error) {
    console.error('Error get all song:', error);
  }
}

function* statSaga() {
  yield takeEvery('stat/getTotalStatFetch', getTotalSagaStat);
  yield takeEvery('stat/getGenreStatFetch', getGenreSagaStat);
  yield takeEvery('stat/getArtStatFetch', getArtSagaStat);
  yield takeEvery('stat/getAlbFetch', getAlbStat);
}

export default statSaga;
