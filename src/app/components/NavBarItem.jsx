'use client'
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation';

export default function NavBarItem({ title, param }) {
    const searchParam = useSearchParams();
    const genre = searchParam.get('genre');
    return (
        <div className={`hover:text-amber-600 font-semibold 
        ${genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-full'}`}>
            <Link href={`/?genre=${param}`}>{title}</Link>
        </div>
    );
}
