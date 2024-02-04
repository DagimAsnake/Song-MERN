import { FaCompactDisc } from 'react-icons/fa';

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
  return (
    <div>
      <h2 className='text-xl text-center font-bold mb-4'>
        Number of Songs in Each Album
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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
              <p>{album.songs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdStat;
