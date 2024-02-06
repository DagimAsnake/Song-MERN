import React, { useEffect } from 'react';
import { IoMdMusicalNote } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { getGenreStatFetch } from '../store/Slice/statSlice';

interface GenreData {
    genre: string;
    songCount: number;
  }

const FirstStat: React.FC = () => {
  const dispatch = useDispatch();
    const statState = useSelector((state) => state.stat);

    useEffect(() => {
            dispatch(getGenreStatFetch());
      }, [dispatch]);
    
      const genreData: GenreData[] = statState.genreSong || [];
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
