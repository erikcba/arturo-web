import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logoNegro from '../assets/logoNegro.png'
import Menu from '../components/Menu'
import { useTranslation } from 'react-i18next'
import contactImg from '../assets/contactImg.png'
import Redes from '../components/Redes'

const Contact = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [animando, setAnimando] = useState(false)

    const { t } = useTranslation()

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
        <div className='bg-gris h-auto sm:h-screen'>
            <Navbar logo={logoNegro} bgColor={`${mostrarMenu ? 'bg-white' : 'bg-black'}`} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
                    if (mostrarMenu) {
                        cerrarMenu()
                    } else {
                        abrirMenu()
                    }
                }} />
            {
                mostrarMenu && <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
            }
            <div id='top' className='flex flex-col px-4 sm:px-0 pt-30 pb-10 md:pb-0 md:pt-0'>
                <img className='w-auto md:h-screen md:absolute hidden md:block' src={contactImg} alt="" />
                <div className='container mx-auto 2xl:pt-50'>
                    <div className='flex flex-row items-center h-auto xl:h-[711px] justify-end w-full gap-20 '>
                        <div className='w-full md:w-1/2 flex flex-col items-center justify-between h-full gap-5'>
                            <div className='flex flex-col w-fit 2xl:pl-22'>
                                <h1 className='text-black text-8-5 font-xxlight text-lexend uppercase tracking-widest leading-none w-fit text-left'>
                                    Get in touch
                                </h1>
                                <p className='uppercase text-black text-2xl font-semibold text-lexend tracking-widest leading-none w-fit text-left mt-10'>
                                    /Or just say hello
                                </p>
                            </div>
                            <div className='border-b-4 border-white pb-6 w-fit '>
                                <p className='bg-black  text-white text-xl md:text-4xl font-medium text-lexend  leading-none w-fit text-center px-5 py-5 '>
                                    info@arturoguitar.com
                                </p>
                            </div>
                            <img className='w-auto md:hidden' src={contactImg} alt="" />
                            <Redes color={'negro'} />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Contact