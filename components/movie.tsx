"use client";
import React from "react";
import styles from "../styles/movie.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Movie({
  id,
  poster_path,
  title,
}: {
  id: number;
  poster_path: string;
  title: string;
}) {
  const router = useRouter();
  return (
    <div className={styles.movie} key={id}>
      <img
        onClick={() => router.push(`/movies/${id}`)}
        src={poster_path}
        alt=""
      />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
