import React, { useEffect } from 'react';
import { FaMusic, FaUser, FaCompactDisc } from 'react-icons/fa';
import { IoMdMusicalNote } from 'react-icons/io';
import { useSelector, useDispatch } from 'react-redux';
import { getTotalStatFetch } from '../store/Slice/statSlice';

interface Data {
  songs: number;
  artists: number;
  albums: number;
  genres: number;
}

const TotalStat = () => {
  const dispatch = useDispatch();
  const statState = useSelector((state) => state.stat);

  useEffect(() => {
    dispatch(getTotalStatFetch());
  }, []);

  const statList = statState.totalStatistics;

  return (
    <div>
      <h2 className='text-2xl font-bold mb-4 text-center'>Total Statistics</h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        <div className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'>
          <div className='text-4xl text-blue-500 mr-4'>
            <FaMusic />
          </div>
          <div className=''>
            <h2 className='text-xl font-bold'>Total Songs</h2>
            <p className='text-center'>{statList.songs}</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'>
          <div className='text-4xl text-blue-500 mr-4'>
            <FaUser />
          </div>
          <div className=''>
            <h2 className='text-xl font-bold'>Total Artist</h2>
            <p className='text-center'>{statList.artists}</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'>
          <div className='text-4xl text-blue-500 mr-4'>
            <FaCompactDisc />
          </div>
          <div className=''>
            <h2 className='text-xl font-bold'>Total Album</h2>
            <p className='text-center'>{statList.albums}</p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'>
          <div className='text-4xl text-blue-500 mr-4'>
            <IoMdMusicalNote />
          </div>
          <div className=''>
            <h2 className='text-xl font-bold'>Total Genre</h2>
            <p className='text-center'>{statList.genres}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalStat;
