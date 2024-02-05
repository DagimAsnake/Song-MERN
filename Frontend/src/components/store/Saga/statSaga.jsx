import { call, takeEvery, put } from 'redux-saga/effects';
import { totalStat } from '../Slice/statSlice';

function* getTotalSagaStat() {
  try {
    const response = yield call(() => fetch('http://localhost:8000/stat/total-counts'));
    if (!response.ok) {
      throw new Error('Failed to add song');
    }
    const allSong = yield response.json();
    yield put({ type: totalStat, payload: allSong.data });
  } catch (error) {
    console.error('Error get all song:', error);
  }
}


function* statSaga() {
  yield takeEvery('stat/totalStat', getTotalSagaStat);
}

export default statSaga;
