import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Redes from './Redes'
import BackTop from './BackTop'


const Menu = ({ className, onClose }) => {

    const { t, i18n } = useTranslation()

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        if (onClose) onClose()
    }
    return (
        <div className={`w-screen fixed inset-0 pt-30 z-30 min-h-screen bg-black overflow-y-auto ${className}`}>
            <div className='flex flex-col h-full'>
                <div className='container h-full mx-auto flex flex-col md:flex-row justify-center items-center xl:gap-14 gap-8 z-20'>
                    <div className='flex flex-col items-center justify-center gap-4 2xl:ml-auto'>
                        <Link to='/'>
                            <p className='text-white text-3xl 2xl:text-[7.5rem] font-xxlight text-lexend tracking-max leading-none group  hover:bg-white transition-all duration-300 ease-in-out px-0 xl:px-24 hover:text-black'>
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>01/</span>
                                INDEX</p>
                        </Link>
                        <Link to='/about'>
                            <p className='text-white text-3xl 2xl:text-[7.5rem] font-xxlight text-lexend tracking-max leading-none group hover:bg-white transition-all duration-300 ease-in-out px-0 xl:px-24 hover:text-black'>
                                ABOUT
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>/02</span>
                            </p>
                        </Link>
                        <Link to='/calendar'>
                            <p className='text-white text-3xl 2xl:text-[7.5rem] font-xxlight text-lexend tracking-max leading-none group hover:bg-white transition-all duration-300 ease-in-out px-0 xl:px-12 hover:text-black'>
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>03/</span>
                                CALENDAR</p>
                        </Link>
                        <Link to='/contact'>
                            <p className='text-white text-3xl 2xl:text-[7.5rem] font-xxlight text-lexend tracking-max leading-none group hover:bg-white transition-all duration-300 ease-in-out px-0 xl:px-12 hover:text-black'>
                                CONTACT
                                <span className='text-white tracking-widest text-xs xl:text-4xl font-bold group-hover:text-black'>/04</span>
                            </p>
                        </Link>
                    </div>
                    <div className='flex flex-row md:flex-col justify-center items-center gap-4 '>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-lexend text-2xl font-normal ${i18n.language === 'en' ? 'text-white' : 'text-gray-500'} hover:text-white hover:cursor-pointer transition`}
                        >
                            EN
                        </button>
                        <div className='border w-full border-l-white h-full md:border-t-white'></div>
                        <button
                            onClick={() => changeLanguage('es')}
                            className={`text-lexend text-2xl font-normal ${i18n.language === 'es' ? 'text-white' : 'text-gray-500'} hover:text-white hover:cursor-pointer transition`}
                        >
                            ES
                        </button>
                    </div>
                </div>
                <div className='container self-end mx-auto py-10 flex flex-col md:flex-row gap-10 mt-5 items-center justify-center w-full md:relative'>
                    <Redes color={'blanco'} />
                </div>
            </div>
        </div>
    )
}

export default Menu