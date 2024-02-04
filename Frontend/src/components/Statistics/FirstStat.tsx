import { IoMdMusicalNote } from "react-icons/io";

interface GenreData {
    genre: string;
    count: number;
  }

  const genreData: GenreData[] = [
    { genre: 'Rock', count: 30 },
    { genre: 'Jazz', count: 20 },
    { genre: 'Pop', count: 25 },
  ];

const FirstStat = () => {
  return (
    <div>
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
  )
}

export default FirstStat
