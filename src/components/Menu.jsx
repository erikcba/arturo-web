import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Redes from './Redes'

const Menu = ({ className, onClose }) => {

    const { i18n } = useTranslation()
    const { t } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        if (onClose) onClose()
    }

    const wipeHoverClassLTR = 'menu-link-effect'
    const wipeHoverClassRTL = 'menu-link-effect-rtl'

    return (
        <div className={`w-screen fixed inset-0 z-30 min-h-screen bg-black overflow-y-auto ${className}`}>
            <div className='flex flex-col h-full pt-20 md:pt-40 xl:pt-26 '>
                <div className='container h-full mx-auto flex flex-col lg:flex-row justify-center items-center pt-20 sm:pt-0 xl:gap-14 gap-24 z-20'>
                    <div className='flex flex-col items-center justify-center gap-10 xl:gap-6 lg:ml-40 xl:ml-20 2xl:ml-auto'>
                        <Link to='/' onClick={onClose}>
                            <p className={`text-white text-3xl md:text-5xl xl:text-[5.5rem] 2xl:text-[7.5rem] uppercase font-xxlight text-lexend ${i18n.language === 'en' ? 'tracking-max' : 'tracking-wide'} leading-none group px-0 xl:px-24 ${wipeHoverClassLTR}`}>
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>01/</span>
                                {t('home')}
                            </p>
                        </Link>

                        {/* BOTÓN ABOUT (Derecha a Izquierda) */}
                        <Link to='/about' onClick={onClose}>
                            <p className={`text-white text-3xl md:text-5xl xl:text-[5.5rem] 2xl:text-[7.5rem] uppercase font-xxlight text-lexend ${i18n.language === 'en' ? 'tracking-max' : 'tracking-widest'} leading-none group px-0 xl:px-24 ${wipeHoverClassRTL}`}>
                                {t('about')}
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>/02</span>
                            </p>
                        </Link>

                        {/* BOTÓN CALENDAR (Izquierda a Derecha) */}
                        <Link to='/calendar' onClick={onClose}>
                            <p className={`text-white text-3xl md:text-5xl xl:text-[5.5rem] 2xl:text-[7.5rem] uppercase font-xxlight text-lexend ${i18n.language === 'en' ? 'tracking-max' : 'tracking-widest'} leading-none group px-0 xl:px-24 ${wipeHoverClassLTR}`}>
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>03/</span>
                                {t('calendar')}
                            </p>
                        </Link>

                        {/* BOTÓN CONTACT (Derecha a Izquierda) */}
                        <Link to='/contact' onClick={onClose}>
                            <p className={`text-white text-3xl md:text-5xl xl:text-[5.5rem] 2xl:text-[7.5rem] uppercase font-xxlight text-lexend ${i18n.language === 'en' ? 'tracking-max' : 'tracking-widest'} leading-none group px-0 xl:px-24 ${wipeHoverClassRTL}`}>
                                {t('contact')}
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>/04</span>
                            </p>
                        </Link>
                    </div>
                    <div className='flex flex-row lg:flex-col justify-center items-center gap-4 '>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-lexend text-2xl font-light sm:font-normal ${i18n.language === 'en' ? 'text-white' : 'text-gray-500'} hover:text-white hover:cursor-pointer transition`}
                        >
                            EN
                        </button>
                        <div className='border w-full border-l-white h-full md:border-t-white'></div>
                        <button
                            onClick={() => changeLanguage('es')}
                            className={`text-lexend text-2xl font-light sm:font-normal ${i18n.language === 'es' ? 'text-white' : 'text-gray-500'} hover:text-white hover:cursor-pointer transition`}
                        >
                            ES
                        </button>
                    </div>
                </div>
                <div className='container self-end mx-auto py-10 px-10 sm:px-0 flex flex-col md:flex-row gap-10 mt-5 items-center justify-center w-full md:relative'>
                    <Redes color={'blanco'} />
                </div>
            </div>
        </div>
    )
}

export default Menu