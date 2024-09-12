import React from "react";
import { getMovieDetails, getSimilarMovies } from "@/services/tmdbApi";
import DetailCard from "@/components/Movie/Card/DetaildCard";
import MovieGrid from "@/components/Movie/MovieGrid";

export default async function Page({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movie = await getMovieDetails(movieId);

  const similarMovies = await getSimilarMovies(movieId);

  return (
    <div className='mt-10'>
      <DetailCard movie={movie} />
      <div className='text-center my-10'>
        <h2 className='font-bold text-5xl'>Similar movies</h2>
      </div>
      <MovieGrid movies={similarMovies} />
    </div>
  );
}
