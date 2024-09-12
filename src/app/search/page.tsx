"use client";

import MovieGrid from "@/components/Movie/MovieGrid";
import { useSearchMoviesQuery } from "@/redux/apiSlice";
import { AppDispatch, RootState } from "@/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginator from "@/components/Movie/Card/Paginator";
import { setPage } from "@/redux/searchSlice";
import { Spinner } from "@/components/ui/Spiner";

export default function Page() {
  const { query, page } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  const {
    data = { total_pages: 0, results: [], total_results: 0 },
    isLoading,
    isFetching,
  } = useSearchMoviesQuery({
    query,
    page,
  });

  const loading = isLoading || isFetching;

  return (
    <div className=' flex flex-col'>
      {query.length > 0 && (
        <h2 className='text-center my-10 font-bold text-5xl'>{`Search Result for "${query}"`}</h2>
      )}

      {loading && <Spinner size='large' className='min-h-[50vh]' />}

      {!loading && data.results.length > 0 && (
        <MovieGrid movies={data.results} />
      )}
      {!loading && data.total_pages > 1 && (
        <Paginator
          currentPage={page}
          totalPages={data.total_pages}
          onPageChange={(value) => dispatch(setPage(value))}
          showPreviousNext
        />
      )}
    </div>
  );
}
