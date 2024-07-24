import Result from "@/components/Result"
import { useSearchParams } from "next/navigation"

const API_KEY = process.env.API_KEY as string

type searchParams = {
  genre:string
}

export default async function Home({searchParams}:{searchParams:any}) {
  const genre = searchParams.genre || 'fetchTrending'
  const res =await fetch(
    `https://api.themoviedb.org/3${
      genre === 'fetchTopRated' ?'/movie/top_rated' :'/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`
  )

 

  const data = await res.json();

  if(!res.ok){
    console.log('Failed to fetch data')
  }
  const result = data.results;
  // console.log(result)
  // console.log(genre)
  
  return (
    <div>
      <Result result={result}/>
    </div>
  )
}
