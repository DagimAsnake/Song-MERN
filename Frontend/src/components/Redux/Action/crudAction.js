import {
  ADD_SONG,
  GET_ALL_SONG,
  GET_ONE_SONG,
  UPDATE_SONG,
  DELETE_SONG,
} from '../Constants';

export const addSong = (data) => {
  return {
    type: ADD_SONG,
    data: data,
  };
};

export const getAllSong = () => {
  return {
    type: GET_ALL_SONG,
  };
};

export const getOneSong = (data) => {
  return {
    type: GET_ONE_SONG,
    date: data,
  };
};

export const updateSong = (data) => {
  return {
    type: UPDATE_SONG,
    data: data,
  };
};

export const deleteSong = (data) => {
  return {
    type: DELETE_SONG,
    data: data,
  };
};
