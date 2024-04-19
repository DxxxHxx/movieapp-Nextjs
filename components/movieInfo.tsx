import React from "react";
import { IMovie, URL } from "../app/(home)/page";
import styles from "../styles/movieInfo.module.css";

export const getMovie = async (id: string) => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie: IMovie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={movie.poster_path} alt="" />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
