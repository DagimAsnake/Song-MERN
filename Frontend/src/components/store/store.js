import { configureStore } from '@reduxjs/toolkit';

import songReducer from './songSlice';
import statReducer from './statSlice';

const store = configureStore({
  reducer: { song: songReducer, stat: statReducer },
});

export default store;
