import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movieInfo";
import MovieVideos from "../../../../components/movieVideos";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>loading info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1 style={{ color: "white" }}>loading video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
