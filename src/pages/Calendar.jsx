import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import logoNegro from '../assets/logoNegro.png'
import Menu from '../components/Menu'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer'
import calendarImg1 from '../assets/calendarImg1.png'
import CalendarCard from '../components/CalendarCard'

const Calendar = () => {

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
            <Navbar logo={logoNegro} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
                if (mostrarMenu) {
                    cerrarMenu()
                } else {
                    setMostrarMenu(true)
                }
            }} />
            {
                mostrarMenu ? <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
                    :
                    <div>
                        <div id='top' className='2xl:pt-60'>
                            <div className='container mx-auto'>
                                <div className='grid grid-cols-4 gap-20 w-full '>
                                    <img className='col-span-1' src={calendarImg1} alt="" />
                                    <div className='col-span-3 px-10 flex flex-col gap-5'>
                                        <h1 className='text-black text-8-5 font-xxlight text-lexend tracking-widest leading-none w-full text-left'>
                                            CALENDAR
                                        </h1>
                                        <div className='flex flex-col gap-10 mt-10'>
                                            <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                            <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                            <CalendarCard date={"19 November 2025, 00hs"} festival={"Reading Fringe Festival"} place={"Düsseldorf, Germany"} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </div>
            }
        </>
    )
}

export default Calendar