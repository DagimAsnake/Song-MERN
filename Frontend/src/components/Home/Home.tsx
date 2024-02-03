import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiLoveSong } from 'react-icons/gi';
import { getAllSong } from '../Redux/Action/crudAction';

interface RootState {
  crudSong: {
    id: string;
    title: string;
    artist: string;
    album: string;
    genre: string;
  }[];
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { status, data: songList } = useSelector(
    (state: RootState) => state.crudSong
  );

  useEffect(() => {
    dispatch(getAllSong());
  }, [dispatch]);

  return (
    <div className='container mx-auto px-3'>
      <h1 className='text-2xl font-bold my-4 text-center'>
        Welcome to the Song App explore and Enjoy the song
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {status === 'success' &&
          songList.map((song) => (
            <div
              key={song._id}
              className='bg-gray-100 p-4 rounded-md shadow-md'
            >
              <div className='text-lg font-bold flex items-center justify-center'>
                <GiLoveSong className='ml-3' />
                <h2 className='text-xl font-semibold pt-2 mb-2 text-center'>
                  {song.title}
                </h2>
              </div>
              <div className='flex justify-around mb-4'>
                <p className='text-gray-700'>{song.artist}</p>
                <p className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-3 rounded-3xl focus:outline-none focus:shadow-outline cursor-pointer'>
                  {song.genre}
                </p>
              </div>
              <div className='flex justify-center'>
                <Link
                  to={`/details/${song.id}`}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
