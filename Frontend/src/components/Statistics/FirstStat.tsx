import React, { useEffect } from 'react';
import { IoMdMusicalNote } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { genreStat } from '../store/Slice/statSlice';

interface GenreData {
    genre: string;
    count: number;
  }

const FirstStat = () => {
  const dispatch = useDispatch();
    const statState = useSelector((state) => state.stat);

    useEffect(() => {
        fetch('http://localhost:8000/stat/songs-by-genre-count')
          .then((response) => response.json())
          .then((data) => {
            dispatch(genreStat(data.data));
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);
    
      const genreData = statState.genreSong;
  return (
    <div>
       <h2 className="text-xl text-center font-bold mb-4">Number of Songs in Each Genre</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {genreData.map(genre => (
            <div key={genre.genre} className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
              <div className="text-4xl text-blue-500 mr-4"><IoMdMusicalNote /></div>
              <div>
                <h3 className="text-lg font-bold">{genre.genre}</h3>
                <p className='text-center'>{genre.songCount}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default FirstStat
