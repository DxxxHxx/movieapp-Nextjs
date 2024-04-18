import Link from "next/link";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const URL = `https://nomad-movies.nomadcoders.workers.dev/movies`;

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = fetch(URL);
  return (await res).json();
};

export default async function Home() {
  const movies: IMovie[] = await getMovies();
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
