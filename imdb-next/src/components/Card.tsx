import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

type ResultProp = {
  backdrop_path: string;
  id: number;
  name: string;
  title: string;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  adult: boolean;
  original_language: string;
  genre_ids: Array<string>;
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: Array<string>;
  release_date:string;
};

type CardProp = {
  result: ResultProp;
};

export default function Card({ result }: CardProp) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm-border-slate-400 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
       <Image
       src={`https://image.tmdb.org/t/p/original/${
        result.backdrop_path || result.poster_path
      }`}
      height={300}
      width={500}
      alt="image"
      className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-200"
       />
      </Link>
      <div className="p-2">
        <p className="text-md line-clamp-2">{result.overview}</p>
        <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
        <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3"/>
            {result.vote_count}
        </p>
      </div>
    </div>
  );
}
