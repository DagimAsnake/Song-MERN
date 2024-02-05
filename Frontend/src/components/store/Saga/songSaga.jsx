import { takeEvery, put } from 'redux-saga/effects';
import {
  addSong,
  getAllSong,
  getGenreSong,
  getOneSong,
  deleteSong,
  updateSong,
} from '../Slice/songSlice';

function* addSongSaga(action) {
  try {
    const response = yield fetch('http://localhost:8000/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const newSong = yield response.json();
    yield put({ type: addSong, payload: newSong });
  } catch (error) {
    console.error('Error adding song:', error);
  }
}

function* getAllSagaSong() {
  try {
    const response = yield fetch('http://localhost:8000/songs');
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put({ type: getAllSong, payload: allSong.data });
  } catch (error) {
    console.error('Error get all song:', error);
  }
}

// function* getGenreSagaSong(action) {
//   console.log(action);
//   try {
//     const response = yield fetch(
//       `http://localhost:8000/songs/genre/?genre=${action.payload}`
//     );
//     if (!response.ok) {
//       throw new Error('Failed to add song');
//     }
//     const allSong = yield response.json();
//     console.log(allSong);
//     yield put({ type: getGenreSong, payload: allSong.data });
//   } catch (error) {
//     console.error('Error get all song:', error);
//   }
// }

function* getOneSagaSong(action) {
  try {
    const response = yield fetch(
      `http://localhost:8000/songs/${action.payload}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch song');
    }
    const song = yield response.json();
    yield put({ type: getOneSong, payload: song.data });
  } catch (error) {
    console.error('Error fetching song:', error);
  }
}

function* deleteSagaSong(action) {
  try {
    const response = yield fetch(
      `http://localhost:8000/songs/${action.payload}`,
      {
        method: 'DELETE',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch song');
    }
    const song = yield response.json();
    yield put({ type: deleteSong, payload: song.data });
  } catch (error) {
    console.error('Error fetching song:', error);
  }
}

function* updateSagaSong(action) {
  try {
    const response = yield fetch(
      `http://localhost:8000/songs/${action.payload.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch song');
    }
    const song = yield response.json();
    yield put({ type: updateSong, payload: song.data });
  } catch (error) {
    console.error('Error fetching song:', error);
  }
}

function* songSaga() {
  yield takeEvery('song/addSong', addSongSaga);
  yield takeEvery('song/getAllSong', getAllSagaSong);
//   yield takeEvery('song/getGenreSong', getGenreSagaSong);
  yield takeEvery('song/getOneSong', getOneSagaSong);
  yield takeEvery('song/deleteSong', deleteSagaSong);
  yield takeEvery('song/updateSong', updateSagaSong);
}

export default songSaga;
