import React from "react";
import { URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <div>{JSON.stringify(movie)}</div>;
}
