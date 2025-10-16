import React from 'react'
import heroCarga from './assets/hero-cargador.png'
import { Link } from 'react-router'

const Index = () => {
    return (
        <Link to='/home' className='bg-black h-screen flex justify-center hover:cursor-default items-center w-full'>
            <img className='bg-cover bg-no-repeat w-full h-full object-cover z-10' src={heroCarga} alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r to-black from-transparent z-20'></div>
            <div className='ml-auto'>
                <div className='text-white flex flex-col gap-4 text-8-5 font-xxlight text-lexend tracking-wide leading-none absolute top-1/12 right-30 z-30'>
                   <p>THE</p>
                   <p>SOUND OF</p>
                   <p>TIMELESS</p>
                   <p>NESS</p>
                    <span className='bg-white text-black'>PASSION</span>
                   <p>IN MUSIC/</p>
                   <p className='uppercase text-xl font-light pt-20 blink'>Click anywhere to continue -{'>'} </p>
                </div>
            </div>
        </Link>
    )
}

export default Index