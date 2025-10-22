import React, { useState } from 'react'
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import logoBlanco from '../assets/logoBlanco.png'

const Home = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [animando, setAnimando] = useState(false)

    const cerrarMenu = () => {
        setAnimando(true)
        setTimeout(() => {
            setMostrarMenu(false)
            setAnimando(false)
        }, 200)
    }

    const abrirMenu = () => {
        setMostrarMenu(true)
    }

    return (
        <div className='bg-zinc-900 h-screen flex flex-col w-full'>

            
                <Navbar logo={logoBlanco} bgColor={'bg-white'} logoBlanco={logoBlanco} logoNegro={logoBlanco} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-white'} abrirMenu={() => {
                    if (mostrarMenu) {
                        cerrarMenu()
                    } else {
                        abrirMenu()
                    }
                }} />

                <>
                    {
                        mostrarMenu && <Menu onClose={cerrarMenu} className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
                    }
                    <div className='container mx-auto my-auto w-full flex flex-col px-10 xl:px-0 gap-12 lg:gap-20 xl:gap-42'>
                        <h1 className='text-white text-3xl lg:text-6xl xl:[font-size:7.5rem] font-extralight text-lexend tracking-max leading-none sm:ml-30 xl:ml-0'>ARTURO</h1>
                        <h1 className='text-white text-3xl lg:text-6xl xl:[font-size:7.5rem] font-extralight text-lexend tracking-max leading-none ml-10 sm:ml-80 xl:ml-auto bg-zinc-950/30 w-fit pl-4 py-4'>CASTRO/</h1>
                    </div>
                </>
            


        </div>
    )
}

export default Home