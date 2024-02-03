import React from 'react';
import { Link } from 'react-router-dom';
import { GiLoveSong } from 'react-icons/gi';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

const song: Song = {
  id: '1',
  title: 'First Song',
  artist: 'First Artist',
  album: 'The King',
  genre: 'Rock',
};

const Details: React.FC = () => {
  const handleDelete = () => {
    // Handle delete logic here
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto bg-white p-4 rounded-md shadow-md'>
        <h1 className='text-2xl text-center font-bold mb-4'>{song.title}</h1>
        <div className='flex items-center justify-center mb-4'>
          <GiLoveSong className='text-4xl text-red-500 mr-2' />
          <p className='text-xl'>{song.artist}</p>
        </div>
        <div className='flex justify-around mb-4'>
          <div className='mb-4'>
            <p>{song.album}</p>
          </div>
          <div className='mb-4'>
            <p className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-3xl focus:outline-none focus:shadow-outline cursor-pointer'>
              {song.genre}
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link
            to={`/edit/${song.id}`}
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded mr-2 flex items-center'
          >
            <FaEdit className='mr-2' />
            Edit
          </Link>
          <button
            className='bg-red-500 text-white font-bold py-2 px-4 rounded flex items-center'
            onClick={handleDelete}
          >
            <FaTrash className='mr-2' />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
