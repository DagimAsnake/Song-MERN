import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import crudSaga from "./Saga/crudSaga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: () =>  [sagaMiddleware]
});

sagaMiddleware.run(crudSaga)

export default store;
