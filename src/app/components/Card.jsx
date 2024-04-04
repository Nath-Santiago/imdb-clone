import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'


export default function Card({ show }) {
    let showName = '';
    if (show.title) {
        showName = show.title
    } else if (show.name) {
        showName = show.name
    } else if (show.original_title) {
        showName = show.original_title
    }
    return (
        <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2'>
            {/* {show.title} */}
            <Link href={`/movie/${show.id}`}>
                <Image
                    className='sm:rounded-t-lg  w-full group-hover:opacity-75 transition-opacity duration-300'
                    src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                    alt={showName}
                    height={500}
                    width={500}
                />
                <div className=''>
                    <p className='line-clamp-2 text-md'>{show.overview}</p>
                    <h2 className='text-lg font-bold truncate'>{showName}</h2>
                    <p className='flex items-center'>
                        {show.release_date || show.first_air_date}
                        <FiThumbsUp className='h-5 mr-1 ml-3' />
                        {show.vote_count}
                    </p>
                </div>
            </Link>
        </div>
    )
}
