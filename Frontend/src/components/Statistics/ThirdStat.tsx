import React, { useEffect } from 'react';
import { FaCompactDisc } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { albStat } from '../store/statSlice';

interface AlbumData {
  album: string;
  songs: number;
}

const albumData: AlbumData[] = [
  { album: 'Album 1', songs: 12 },
  { album: 'Album 2', songs: 8 },
  { album: 'Album 3', songs: 15 },
];

const ThirdStat = () => {
  const dispatch = useDispatch();
    const statState = useSelector((state) => state.stat);

    useEffect(() => {
        fetch('http://localhost:8000/stat/songs-by-album-count')
          .then((response) => response.json())
          .then((data) => {
            console.log(data)
            dispatch(albStat(data.data));
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    
      const albumData = statState.albSong;

  return (
    <div>
      <h2 className='text-xl text-center font-bold mb-4'>
        Number of Songs in Each Album
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {albumData.map((album) => (
          <div
            key={album.album}
            className='bg-white p-4 rounded-md shadow-md flex items-center justify-center'
          >
            <div className='text-4xl text-blue-500 mr-4'>
              <FaCompactDisc />
            </div>
            <div>
              <h3 className='text-lg font-bold'>{album.album}</h3>
              <p className='text-center'>{album.songCount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdStat;
