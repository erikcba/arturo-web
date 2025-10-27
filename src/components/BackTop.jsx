import React from 'react'
import { useTranslation } from 'react-i18next'

const BackTop = ({color}) => {
    const { t } = useTranslation()

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <button onClick={backToTop} className={` ${color === 'negro' ? 'text-black' : 'text-white'} uppercase text-lg font-light mt-5 text-lexend tracking-widest place-content-end leading-none xl:absolute xl:right-0 w-fit text-center hover:scale-110 transition-transform duration-300 hover:cursor-pointer`} >
            {t('backToTop')}
        </button>
    )
}

export default BackTop