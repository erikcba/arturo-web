import React, { useState, useEffect } from 'react'
import heroCarga from './assets/hero-cargador.png'

const Home = () => {
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setCargando(false);
        }, 3000)
    })

    return (
        <div className='bg-zinc-900 h-screen flex justify-center items-center w-full'>
            {
                cargando ? (
                    <div className='bg-zinc-900 h-screen flex justify-center items-center w-full'>
                        <img className='bg-cover bg-no-repeat w-full h-full object-cover z-10' src={heroCarga} alt="" />
                        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r to-zinc-950 from-transparent z-20'></div>
                    </div>
                ) : (
                    <div className='container mx-auto w-full flex flex-col gap-42'>
                        <h1 className='text-white text-8-5 font-extralight text-lexend tracking-max leading-none'>ARTURO</h1>
                        <h1 className='text-white text-8-5 font-extralight text-lexend tracking-max leading-none ml-auto bg-zinc-950/30 w-fit pl-4 py-4'>CASTRO/</h1>
                    </div>
                )
            }

        </div>
    )
}

export default Home