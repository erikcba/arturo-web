import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ className }) => {
    return (
        <div className={`h-screen w-screen bg-black flex flex-row justify-center items-center gap-8 z-20 ${className}`}>
            <div className='flex flex-col items-center justify-center gap-4'>
                <Link to='/'>
                    <p className='text-white text-8-5 font-xxlight text-lexend tracking-max leading-none'><span className='text-white tracking-widest text-4xl font-bold'>01/</span> INDEX</p>
                </Link>
                <Link to='/about'>
                    <p className='text-white text-8-5 font-xxlight text-lexend tracking-max leading-none'>ABOUT <span className='text-white tracking-widest text-4xl font-bold'>/02</span></p>
                </Link>
                <Link to='/calendar'>
                    <p className='text-white text-8-5 font-xxlight text-lexend tracking-max leading-none'><span className='text-white tracking-widest text-4xl font-bold'>03/</span> CALENDAR</p>
                </Link>
                <Link to='/contact'>
                    <p className='text-white text-8-5 font-xxlight text-lexend tracking-max leading-none'>CONTACT <span className='text-white tracking-widest text-4xl font-bold'>/04</span></p>
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-lexend text-2xl font-normal text-white'>EN</p>
                <div className='border w-full border-t-white'></div>
                <p className='text-lexend text-2xl font-normal text-white'>ES</p>
            </div>
        </div>
    )
}

export default Menu