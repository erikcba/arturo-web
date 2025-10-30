import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import logoBlanco from '../assets/logoBlanco.png'
import Menu from '../components/Menu'
import CalendarCard from '../components/CalendarCard'
import Redes from '../components/Redes'
import BackTop from '../components/BackTop'
import { useTranslation } from 'react-i18next'

const Calendar = () => {

    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [animando, setAnimando] = useState(false)

    const { t } = useTranslation()

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
        <div className='bg-contact bg-black'>
            <Navbar logoBlanco={logoBlanco} logoNegro={logoBlanco} bgColor={"bg-white"} color={"text-white"} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
                if (mostrarMenu) {
                    cerrarMenu()
                } else {
                    abrirMenu()
                }
            }} />

            {
                mostrarMenu && <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
            }
            <div>
                <div id='top' className='pt-8 md:pt-10 px-10 sm:px-0'>
                    <div className='container mx-auto'>
                        <div className='flex flex-col gap-8 w-full items-center justify-center '>
                            <div className='w-full xl:w-5/7  flex flex-col gap-5'>
                                <h1 className='text-white uppercase text-8-5 font-xxlight text-lexend tracking-widest leading-none w-full text-center'>
                                    {t("calendar")}
                                </h1>
                                <div className='flex flex-col md:px-14 gap-10 mt-10 '>
                                    <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                    <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                    <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='container mx-auto py-10 px-10 sm:px-10 flex flex-col md:flex-row gap-10 mt-5 items-center justify-center w-full md:relative'>
                    <Redes color={'blanco'} />
                    <BackTop color={'blanco'} />
                </div>
            </div>
        </div>
    )
}

export default Calendar