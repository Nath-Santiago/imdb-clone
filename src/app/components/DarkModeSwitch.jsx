'use client'
import { React, useEffect, useState } from 'react'

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from 'next-themes';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true);
    }, [])
    return (
        <div>{
            mounted && (currentTheme === 'dark' ?
                <FaSun className='text-xl cursor-pointer hover:text-amber-500' onClick={() => {
                    setTheme('light')
                }} /> :
                <FaMoon className='text-xl cursor-pointer hover:text-zinc-500' onClick={() => {
                    setTheme('dark')
                }} />
            )}</div>
    )
}
