import {
  SET_ADD_SONG,
  SET_GET_ALL_SONG,
  GET_ONE_SONG,
  UPDATE_SONG,
  DELETE_SONG,
} from '../Constants';

export const crudSong = (state = [], action) => {
  switch (action.type) {
    case SET_ADD_SONG:
      return [...state, action.payload];
    case SET_GET_ALL_SONG:
      return action.payload;
    case GET_ONE_SONG:
      return;
    case UPDATE_SONG:
        return
    case DELETE_SONG:
        return
    default:
      return state;
  }
};
