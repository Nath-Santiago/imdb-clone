import MoviesPage from "./components/MoviesPage";

const API_KEY_TMDB = process.env.API_KEY_TMDB;

export default async function page({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY_TMDB}&language=en-US&page=1`);
  
  const data = await res.json();
  if(!res.ok) {
    throw new Error('Failed to fetch');
  }
  const results = data.results;
  return (
    <div className='size-full'>
      <MoviesPage results={results}/>
    </div>
  )
}
