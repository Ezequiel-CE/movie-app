import React from "react";
import MovieGrid from "../components/Movie/MovieGrid";
import { getTopMovies, getTrend } from "../services/tmdbApi";

export default async function Home() {
  const top = await getTopMovies();
  const trend = await getTrend();
  return (
    <div>
      <main className='px-3'>
        <div className='text-center my-10'>
          <h2 className='font-bold text-5xl'>Popular</h2>
        </div>
        <MovieGrid movies={top} />
        <div className='text-center my-10'>
          <h2 className='font-bold text-5xl'>Trend</h2>
        </div>
        <MovieGrid movies={trend} />
      </main>
    </div>
  );
}
