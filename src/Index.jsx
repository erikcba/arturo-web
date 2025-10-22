import React from 'react'
import { Link } from 'react-router'
import flecha from './assets/flecha.png'

const Index = () => {
    return (
        <Link to='/home' className='bg-black h-screen flex justify-center hover:cursor-default items-center w-full'>
            <div className='bg-cover bg-hero  bg-no-repeat w-full h-full object-cover z-10' alt="" >
                <div className='z-30 h-full flex justify-end items-center mx-auto px-10 xl:px-0 xl:mr-10'>
                    <div className='text-white flex flex-col gap-1 text-5xl 2xl:[font-size:7.5rem] my-auto font-xxlight text-lexend xl:pr-24 leading-none '>
                        <p>THE</p>
                        <p>SOUND OF</p>
                        <p>TIMELESS</p>
                        <p>NESS</p>
                        <span className='bg-white text-black w-fit'>PASSION</span>
                        <p>IN MUSIC/</p>
                        <p className='uppercase text-sm xl:text-xl font-light mt-20 blink flex xl:flex-row flex-col items-center justify-start pl-4 gap-4 xl:gap-8'>Click anywhere to continue <img src={flecha} alt="" /> </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Index