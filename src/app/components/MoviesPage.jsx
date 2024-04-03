/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import { FaStar } from "react-icons/fa6";
import Card from './Card';

export default async function MoviesPage({ results }) {
    return (
        <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {results.map((show, i) => {
                return <Card key={i} show={show} />
            })}
        </div>
        // <div className='flex flex-wrap justify-center px-64 overflow-x-auto'>
        //     {results.map((show, i) => {
        //         let showName = '';
        //         if (show.title) {
        //             showName = show.title
        //         } else if (show.name) {
        //             showName = show.name
        //         } else if (show.original_title) {
        //             showName = show.original_title
        //         }

        //         return (
        //             <div key={i} className='w-80 m-8 ring-2 ring-gray-500 h-auto rounded-lg overflow-hidden '>
        //                 <div className='border-b-2 border-gray-500 '>
        //                     <Image src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
        //                         alt={showName}
        //                         height={500}
        //                         width={500}
        //                     />
        //                 </div>
        //                 <div className='text-2xl font-mono flex items-center'>
        //                     <div className='text-yellow-300'><FaStar /></div>
        //                     <div className='flex content-end'>{Math.round(((show.vote_average) + Number.EPSILON) * 100) / 100}</div>
        //                 </div>
        //                 <div className='text-2xl font-mono font-bold'>{showName}</div>
        //             </div>)
        //     })}
        // </div>
    )
}
