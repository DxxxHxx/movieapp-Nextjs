import { Suspense } from "react";
import MovieInfo from "../../../../components/movieInfo";
import MovieVideos from "../../../../components/movieVideos";

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

      <Suspense fallback={<h1>loading video</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
