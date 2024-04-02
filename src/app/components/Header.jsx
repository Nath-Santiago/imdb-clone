import React from 'react'
import MenuItem from '@/components/MenuItem'
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from 'next/link';

export default function Header() {
    return (
        <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
            <div className='flex gap-4'>
                <MenuItem title='Home' address='/' Icon={AiFillHome} />
                <MenuItem title='About' address='/' Icon={AiFillInfoCircle} />
            </div>
            <Link href='/' className='flex gap-1 items-center'>
                <span className='text-2xl font-bold bg-amber-500 py-1 px-1 rounded-lg'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
            </Link>
        </div>
    )
}
