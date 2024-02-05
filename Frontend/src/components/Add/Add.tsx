import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addSong } from '../store/Slice/songSlice';
import { useNavigate } from 'react-router-dom';

interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const Add: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [song, setSong] = useState<Song>({
    title: '',
    artist: '',
    album: '',
    genre: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setSong((prevSong) => ({
      ...prevSong,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (field: string) => {
    setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
  };

  const handleAddSong = () => {
    const validationErrors: Record<string, string> = {};

    if (!song.title) {
      validationErrors.title = 'Title is required.';
    }
    if (!song.artist) {
      validationErrors.artist = 'Artist is required.';
    }
    if (!song.album) {
      validationErrors.album = 'Album is required.';
    }
    if (!song.genre) {
      validationErrors.genre = 'Genre is required.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    dispatch(addSong(song));
    navigate('/')

    setSong({
      title: '',
      artist: '',
      album: '',
      genre: '',
    });
    setErrors({});
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-2xl text-center font-bold mb-4'>Add a Song</h1>

      <div className='max-w-md mx-auto bg-white p-4 rounded-md shadow-md'>
        <div className='mb-4'>
          <label htmlFor='title' className='font-semibold'>
            Title
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className={`${
              errors.title ? 'border-red-500' : ''
            } w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={song.title}
            onChange={handleInputChange}
            onBlur={() => handleBlur('title')}
          />
          {errors.title && (
            <p className='text-red-500 text-xs italic'>{errors.title}</p>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='artist' className='font-semibold'>
            Artist
          </label>
          <input
            type='text'
            id='artist'
            name='artist'
            className={`${
              errors.artist ? 'border-red-500' : ''
            } w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={song.artist}
            onChange={handleInputChange}
            onBlur={() => handleBlur('artist')}
          />
          {errors.artist && (
            <p className='text-red-500 text-xs italic'>{errors.artist}</p>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='album' className='font-semibold'>
            Album
          </label>
          <input
            type='text'
            id='album'
            name='album'
            className={`${
              errors.album ? 'border-red-500' : ''
            } w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={song.album}
            onChange={handleInputChange}
            onBlur={() => handleBlur('album')}
          />
          {errors.album && (
            <p className='text-red-500 text-xs italic'>{errors.album}</p>
          )}
        </div>

        <div className='mb-4'>
          <label htmlFor='genre' className='font-semibold'>
            Genre
          </label>
          <select
            id='genre'
            name='genre'
            className={`${
              errors.genre ? 'border-red-500' : ''
            } w-full border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            value={song.genre}
            onChange={handleInputChange}
            onBlur={() => handleBlur('genre')}
          >
            <option value=''>Select Genre</option>
            <option value='Rock'>Rock</option>
            <option value='Jazz'>Jazz</option>
            <option value='Pop'>Pop</option>
            <option value='Hip Hop'>Hip Hop</option>
          </select>
          {errors.genre && (
            <p className='text-red-500 text-xs italic'>{errors.genre}</p>
          )}
        </div>

        <button
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 w-full flex items-center justify-center'
          onClick={handleAddSong}
        >
          <FaPlus className='mr-2' />
          Add Song
        </button>
      </div>
    </div>
  );
};

export default Add;
