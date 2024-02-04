import { FaUser } from 'react-icons/fa';

interface ArtistData {
    artist: string;
    songs: number;
    albums: number;
  }

  const artistData: ArtistData[] = [
    { artist: 'Artist 1', songs: 20, albums: 5 },
    { artist: 'Artist 2', songs: 15, albums: 3 },
    { artist: 'Artist 3', songs: 25, albums: 7 }
  ];

const SecondStat = () => {
  return (
    <div>
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
  )
}

export default SecondStat
