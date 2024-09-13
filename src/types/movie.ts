export type MovieItem = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

type Spokenlanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Productioncountry = {
  iso_3166_1: string;
  name: string;
};

type Productioncompany = {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
};

export type Genre = {
  id: number;
  name: string;
};

export type Belongstocollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

export type DetailMovieItem = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Belongstocollection;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Productioncompany[];
  production_countries: Productioncountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Spokenlanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type searchMoviesParams = {
  query: string;
  page: number;
};

export type searchMoviesResponse = {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
};
