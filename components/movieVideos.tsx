import React from "react";
import { URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("something broken");
  //   const res = await fetch(`${URL}/${id}/videos`);
  //   return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <div>{JSON.stringify(videos)}</div>;
}
