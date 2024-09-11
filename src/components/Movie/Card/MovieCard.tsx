"use client";

import React from "react";
import Image from "next/image";
import { StarIcon } from "@/components/icons/index";
import { redirect, useRouter } from "next/navigation";
import { MovieItem } from "@/types/movie";
import { IMG_URL } from "@/config/constants";

export default function MovieCard(movie: MovieItem) {
  const { title, vote_average: vote, poster_path: imgSrc, id } = movie;
  const router = useRouter();
  return (
    <div
      className='min-[400px]: w-[200px] mx-auto  flex  flex-col hover:cursor-pointer'
      onClick={() => router.push(`/details/${id}`)}
    >
      <Image width={200} height={300} src={`${IMG_URL}${imgSrc}`} alt={title} />
      <div className='movie-description flex  flex-col'>
        <div className=' bg-teal-700 px-2 min-h-14 flex-1 flex justify-center items-center'>
          <h3 className='font-bold text-zinc-200 text-center '>{title}</h3>
        </div>
        <div className='bg-gray-800 text-orange-500 text-center p-2 rounded-mde flex justify-center items-center'>
          <p className='font-bold '>{Math.round(vote * 10) / 10}</p>
          <StarIcon size='20px' />
        </div>
      </div>
    </div>
  );
}
