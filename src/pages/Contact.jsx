import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logoNegro from '../assets/logoNegro.png'
import logoBlanco from '../assets/logoBlanco.png'
import Menu from '../components/Menu'
import contactImg from '../assets/contactImg.png'
import Redes from '../components/Redes'

const Contact = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [animando, setAnimando] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.body.style.overflow = 'visible'
    }, [])



    const cerrarMenu = () => {
        setAnimando(true)
        setTimeout(() => {
            setMostrarMenu(false)
            setAnimando(false)
        }, 200)
        document.body.style.overflow = 'visible'
    }

    const abrirMenu = () => {
        setMostrarMenu(true)
        document.body.style.overflow = 'hidden'
    }
    return (
        <div className='bg-gris h-auto overflow-hidden md:h-[100dvh]'>
            <Navbar logoBlanco={logoBlanco} logoNegro={logoNegro} bgColor={`${mostrarMenu ? 'bg-white' : 'bg-black'}`} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-black md:text-white'} abrirMenu={() => {
                if (mostrarMenu) {
                    cerrarMenu()
                } else {
                    abrirMenu()
                }
            }} />
            {
                mostrarMenu && <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
            }
            <div id='top' className='flex flex-col px-4 xl:h-[100svh] sm:px-8 pb-10 md:pb-0 md:pt-0'>
                <img className='w-auto xl:h-screen xl:absolute top-0 left-0 hidden z-10 xl:block' src={contactImg} alt="" />
                <div className='container mx-auto 2xl:pt-10'>
                    <div className='flex flex-row items-center h-auto xl:h-[711px] justify-center md:justify-end w-full gap-20  '>
                        <div className='w-full md:w-1/2 flex flex-col md:pl-0 items-start justify-between h-full gap-5 xl:pb-10'>
                            <div className='flex flex-col w-fit 2xl:pt-0'>
                                <h1 className='text-black text-[2.8rem] md:text-[3.5rem] xl:text-[4.5rem] 2xl:text-[8.5rem] font-xxlight text-lexend uppercase tracking-widest leading-none w-fit text-left'>
                                    Get in touch
                                </h1>
                                <p className='uppercase text-black text-2xl font-semibold text-lexend tracking-widest leading-none w-fit text-left mt-5'>
                                    /Or just say hello
                                </p>
                            </div>
                            <div className='border-b-4 border-white pb-6 w-fit '>
                                <p className='bg-black  text-white text-xl md:text-2xl 2xl:text-4xl font-medium text-lexend  leading-none w-fit text-center px-5 py-5 '>
                                    info@arturoguitar.com
                                </p>
                            </div>
                            <img className='w-auto xl:hidden' src={contactImg} alt="" />
                            <div className='w-full sm:w-3/4 xl:pb-20'>
                                <Redes color={'negro'} justify='justify-center xl:justify-between' gap='gap-10 xl:gap-0' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact