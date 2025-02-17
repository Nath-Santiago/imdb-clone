import Image from 'next/image';
import React from 'react'

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const API_KEY_TMDB = process.env.API_KEY_TMDB;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY_TMDB}`);

    const movie = await res.json();

    return (
        <div className='size-full'>
            <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
                    alt={movie.poster_path}
                    width={500}
                    height={500}
                    className='rounded-lg'
                    style={{ maxWidth: '100%', height: '100%' }}
                />
                <div className='p-2'>
                    <h2 className='text-2xl mb-3 font-bold'>{movie.title || movie.name}</h2>
                    <p className='text-lg mb-3'>{movie.overview}</p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Date Released: </span>
                        {movie.release_date || movie.first_air_date}
                    </p>
                    <p className='mb-3'>
                        <span className='font-semibold mr-1'>Rating: </span>
                        {movie.vote_count}
                    </p>

                </div>
            </div>

        </div>
    )
}
