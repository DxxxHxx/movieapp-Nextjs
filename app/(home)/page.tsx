import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { BASE_URL } from "../../constants";
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

export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = fetch(BASE_URL);
  return (await res).json();
};

export default async function Home() {
  const movies: IMovie[] = await getMovies();
  // console.log(movies);
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
