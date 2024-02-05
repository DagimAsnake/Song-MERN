import { configureStore } from '@reduxjs/toolkit';
import songSaga from "./Saga/songSaga";
import statSaga from './Saga/statSaga';
import createSagaMiddleware from 'redux-saga'
import songReducer from './Slice/songSlice';
import statReducer from './Slice/statSlice';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { song: songReducer, stat: statReducer },
  middleware: () =>  [sagaMiddleware]
});

sagaMiddleware.run(songSaga)
sagaMiddleware.run(statSaga);

export default store;
