import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { DetailMovieItem } from "@/types/movie";
import { IMG_URL_BIG } from "@/config/constants";
import { StarIcon } from "@/components/icons";

function DetailCard({ movie }: { movie: DetailMovieItem }) {
  const {
    title,
    original_title: titleOriginal,
    vote_average: vote,
    vote_count: voteCount,
    poster_path: imgSrc,
    release_date: date,
    overview,
    genres,
    production_countries: productionCountries,
  } = movie;
  return (
    <Card className='max-w-5xl mx-auto bg-gray-800 text-zinc-200 shadow-md'>
      <CardContent className='p-6'>
        <div className='flex flex-col md:flex-row gap-6'>
          <div className='flex-shrink-0 pr-4 mx-auto'>
            <Image
              src={`${IMG_URL_BIG}${imgSrc}`}
              alt={title}
              width={300}
              height={450}
              className='rounded-lg object-cover'
            />
          </div>
          <div className='flex-grow'>
            <CardHeader className='p-0'>
              <CardTitle className='text-4xl font-bold mb-2'>{title}</CardTitle>
              <p className='text-lg text-muted-foreground'>{titleOriginal}</p>
            </CardHeader>
            <div className='mt-4'>
              <p>
                <span className='font-semibold'>Production: </span>
                {productionCountries.map((country) => country.name).join(", ")}
              </p>
              <p>
                <span className='font-semibold'>Release date: </span> {date}
              </p>
            </div>
            <div className='flex gap-2 mt-4'>
              {genres?.map((genre) => (
                <Badge
                  key={genre.id}
                  variant='default'
                  className='bg-teal-700  '
                >
                  {genre.name}
                </Badge>
              ))}
            </div>
            <div className='flex items-center mt-4'>
              <StarIcon size='24px' />
              <span className='ml-2 font-semibold'>
                {Math.round(vote * 10) / 10} / 10
              </span>
              <span className='ml-2 text-muted-foreground'>
                ({voteCount} votes)
              </span>
            </div>
            <p className='mt-4 text-muted-foreground'>{overview}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default DetailCard;
