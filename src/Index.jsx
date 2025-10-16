import React from 'react'
import { Link } from 'react-router'

const Index = () => {
    return (
        <Link to='/home' className='bg-black h-screen flex justify-center hover:cursor-default items-center w-full'>
            <div className='bg-cover bg-hero bg-no-repeat w-full h-full object-cover z-10' alt="" >
                <div className='z-30 h-full flex justify-end items-center mr-10'>
                    <div className='text-white flex flex-col gap-1 text-8-5 my-auto font-xxlight text-lexend tracking-wide leading-none '>
                        <p>THE</p>
                        <p>SOUND OF</p>
                        <p>TIMELESS</p>
                        <p>NESS</p>
                        <span className='bg-white text-black'>PASSION</span>
                        <p>IN MUSIC/</p>
                        <p className='uppercase text-xl font-light mt-20 blink'>Click anywhere to continue -{'>'} </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Index