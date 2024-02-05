import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiLoveSong } from 'react-icons/gi';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneSong, deleteSong } from '../store/Slice/songSlice';
import { useNavigate } from 'react-router-dom';

interface Song {
  crudSong: {
    id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  };
}

const Details: React.FC = () => {
  const { id } = useParams();
  const songState = useSelector((state) => state.song.selectedSong);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOneSong(id));
  }, [dispatch, id]);

  const handleDelete = () => {
    dispatch(deleteSong(songState?._id));
    navigate('/');
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='max-w-md mx-auto bg-white p-4 rounded-md shadow-md'>
        <h1 className='text-2xl text-center font-bold mb-4'>
          {songState?.title}
        </h1>
        <div className='flex items-center justify-center mb-4'>
          <GiLoveSong className='text-4xl text-red-500 mr-2' />
          <p className='text-xl'>{songState?.artist}</p>
        </div>
        <div className='flex justify-around mb-4'>
          <div className='mb-4'>
            <p>{songState?.album}</p>
          </div>
          <div className='mb-4'>
            <Link
              to={`/genre/${songState?.genre}`}
              className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-3xl focus:outline-none focus:shadow-outline cursor-pointer'
            >
              {songState?.genre}
            </Link>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link
            to={`/edit/${songState?._id}`}
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
