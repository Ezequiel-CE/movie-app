import * as React from "react";

import { MovieItem } from "@/types/movie";
import MovieCard from "./Card/MovieCard";

type CarouselProps = {
  movies: MovieItem[];
};

function MovieGrid({ movies }: CarouselProps) {
  return (
    <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-4 p-4'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
