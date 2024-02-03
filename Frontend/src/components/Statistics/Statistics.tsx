import React from 'react';
import { FaMusic, FaUser, FaCompactDisc } from 'react-icons/fa';
import { IoMdMusicalNote } from "react-icons/io";

interface Data {
  songs: number;
  artists: number;
  albums: number;
  genres: number;
}

interface GenreData {
  genre: string;
  count: number;
}

interface ArtistData {
  artist: string;
  songs: number;
  albums: number;
}

interface AlbumData {
  album: string;
  songs: number;
}

const data: Data = {
  songs: 150,
  artists: 30,
  albums: 50,
  genres: 10,
};

const genreData: GenreData[] = [
  { genre: 'Rock', count: 30 },
  { genre: 'Jazz', count: 20 },
  { genre: 'Pop', count: 25 },
  // Add more genre data if needed
];

const artistData: ArtistData[] = [
  { artist: 'Artist 1', songs: 20, albums: 5 },
  { artist: 'Artist 2', songs: 15, albums: 3 },
  { artist: 'Artist 3', songs: 25, albums: 7 },
  // Add more artist data if needed
];

const albumData: AlbumData[] = [
  { album: 'Album 1', songs: 12 },
  { album: 'Album 2', songs: 8 },
  { album: 'Album 3', songs: 15 },
  // Add more album data if needed
];

const Statistics: React.FC = () => {
  return (
    <div className="container max-w-screen-lg mx-auto px-4 py-8">
       <h2 className="text-2xl font-bold mb-4 text-center">Total Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
          <div className="text-4xl text-blue-500 mr-4"><FaMusic /></div>
          <div className=''>
            <h2 className="text-xl font-bold">Total Songs</h2>
            <p>{data.songs}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
          <div className="text-4xl text-blue-500 mr-4"><FaUser /></div>
          <div className=''>
            <h2 className="text-xl font-bold">Total Artist</h2>
            <p>{data.artists}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
          <div className="text-4xl text-blue-500 mr-4"><FaCompactDisc /></div>
          <div className=''>
            <h2 className="text-xl font-bold">Total Album</h2>
            <p>{data.albums}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
          <div className="text-4xl text-blue-500 mr-4"><IoMdMusicalNote /></div>
          <div className=''>
            <h2 className="text-xl font-bold">Total Genre</h2>
            <p>{data.genres}</p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl text-center font-bold mb-4">Number of Songs in Each Genre</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {genreData.map(genre => (
            <div key={genre.genre} className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
              <div className="text-4xl text-blue-500 mr-4"><IoMdMusicalNote /></div>
              <div>
                <h3 className="text-lg font-bold">{genre.genre}</h3>
                <p>{genre.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl text-center font-bold mb-4">Number of Songs & Albums Each Artist Has</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {artistData.map(artist => (
            <div key={artist.artist} className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
              <div className="text-4xl text-blue-500 mr-4"><FaUser /></div>
              <div>
                <h3 className="text-lg font-bold">{artist.artist}</h3>
                <p>{`${artist.songs} Songs | ${artist.albums} Albums`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-xl text-center font-bold mb-4">Number of Songs in Each Album</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {albumData.map(album => (
            <div key={album.album} className="bg-white p-4 rounded-md shadow-md flex items-center justify-center">
              <div className="text-4xl text-blue-500 mr-4"><FaCompactDisc /></div>
              <div>
                <h3 className="text-lg font-bold">{album.album}</h3>
                <p>{album.songs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
