import Card from "./Card";

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

  interface ResultProps{
    result:ResultProp[]
  }
  
  export default function Result({ result }: ResultProps) {
  
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-2-6xl mx-auto py-4">
        {result.map((item) => (
         <Card key={item.id} result={item} />
        ))}
      </div>
    );
  }
  