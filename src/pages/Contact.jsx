import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import logoNegro from '../assets/logoNegro.png'
import Menu from '../components/Menu'
import { useTranslation } from 'react-i18next'
import contactImg from '../assets/contactImg.png'

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
    return (
        <>
            <Navbar logo={logoNegro} color={"text-white"} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
                if (mostrarMenu) {
                    cerrarMenu()
                } else {
                    setMostrarMenu(true)
                }
            }} />
            {
                mostrarMenu ? <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
                    :

                    <div id='top' className=''>
                        <img className='w-auto h-screen absolute' src={contactImg} alt="" />
                        <div className='container mx-auto 2xl:pt-50'>
                            <div className='flex flex-row items-center h-[711px] justify-end w-full gap-20 '>
                                <div className='w-1/2 flex flex-col justify-between h-full gap-5 border-b-2 border-white'>
                                    <div>
                                        <h1 className='text-black text-8-5 font-xxlight text-lexend uppercase tracking-widest leading-none w-full text-left'>
                                            Get in touch
                                        </h1>
                                        <p className='uppercase text-black text-2xl font-semibold text-lexend tracking-widest leading-none w-full text-left mt-10'>
                                            /Or just say hello
                                        </p>
                                    </div>
                                    <p className='bg-black text-white text-4xl font-medium text-lexend  leading-none w-fit text-center px-5 py-5 '>
                                        info@arturoguitar.com
                                    </p>
                                    <div>
                                        <p>
                                            redes
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

            }
        </>
    )
}

export default Contact