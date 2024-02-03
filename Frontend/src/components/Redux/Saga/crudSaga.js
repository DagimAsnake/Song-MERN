import {takeEvery, put} from 'redux-saga/effects'
import { ADD_SONG, SET_ADD_SONG, GET_ALL_SONG, SET_GET_ALL_SONG } from '../Constants'

function* addSong(action) {
    try {
      const response = yield fetch('http://localhost:8000/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.data),
      });
      if (!response.ok) {
        throw new Error('Failed to add song');
      }
      const newSong = yield response.json();
      yield put({ type: SET_ADD_SONG, payload: newSong });
    } catch (error) {
      console.error('Error adding song:', error);
    }
  }

  function* getAllSong() {
    try {
      const response = yield fetch('http://localhost:8000/songs');
      if (!response.ok) {
        throw new Error('Failed to add song');
      }
      const allSong = yield response.json();
      yield put({ type: SET_GET_ALL_SONG, payload: allSong });
    } catch (error) {
      console.error('Error adding song:', error);
    }
  }

function* crudSaga() {
    yield takeEvery(ADD_SONG, addSong)
    yield takeEvery(GET_ALL_SONG, getAllSong)
}

export default crudSaga