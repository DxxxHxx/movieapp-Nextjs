import React from "react";
import { URL } from "../app/(home)/page";
import styles from "../styles/moiveVideo.module.css";

export interface IVideo {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
const getVideos = async (id: string) => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${URL}/${id}/videos`);
  return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos: IVideo[] = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
