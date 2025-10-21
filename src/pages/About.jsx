import React, { useState, useRef } from 'react'
import Navbar from '../components/Navbar'
import aboutImg from '../assets/aboutImg.png'
import aboutImg2 from '../assets/aboutImg2.png'
import aboutImg3 from '../assets/aboutImg3.png'
import aboutImg4 from '../assets/aboutImg5.png'
import logoNegro from '../assets/logoNegro.png'
import Menu from '../components/Menu'
import { useTranslation, Trans } from 'react-i18next'
import Footer from '../components/Footer'
import Redes from '../components/Redes'
import BackTop from '../components/BackTop'

const About = () => {

  const [mostrarMenu, setMostrarMenu] = useState(false)
  const [animando, setAnimando] = useState(false)
  const scrollPosRef = useRef(0)

  const { t } = useTranslation()

  const abrirMenu = () => {
    scrollPosRef.current = window.scrollY // guardamos posición actual
    setMostrarMenu(true)
    document.body.style.overflow = 'hidden' // evitamos scroll mientras el menú está abierto
  }

  const cerrarMenu = () => {
    setAnimando(true)
    setTimeout(() => {
      setMostrarMenu(false)
      setAnimando(false)
      document.body.style.overflow = 'auto'
      window.scrollTo(0, scrollPosRef.current)
    }, 200)
  }
  return (

    <div className='bg-gris'>
      <Navbar logo={logoNegro} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
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
        <div id='top' className='pt-20 md:pt-24 2xl:pt-72 px-4 sm:px-0'>
          <div className='container mx-auto flex flex-col md:flex-row min-h-[600px] md:min-h-[700px] justify-center items-center relative'>
            <div className='flex flex-col gap-3 xl:gap-8 z-20 h-fit absolute md:left-30 top-10 bottom-0'>
              <h1 className='text-black text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none'>ARTURO</h1>
              <h1 className='text-white text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none py-2 bg-black ml-auto w-fit px-4'>/CASTRO</h1>
              <h1 className='text-black text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none'>NOGUERAS</h1>
            </div>
            <img className="absolute md:right-5 z-10 -bottom-6 xl:-top-25" src={aboutImg} alt="" />
          </div>
          <div className='w-full md:w-5/7 container mx-auto pt-20  md:py-20 flex justify-center items-center'>
            <p className='text-2xl xl:text-4xl font-light text-left md:text-center'>
              <Trans i18nKey="about1" components={{ 1: <strong className="font-semibold text-black" /> }} />
            </p>
          </div>
          <div className='flex flex-col xl:flex-row container mx-auto  justify-center items-center gap-10 my-10'>
            <img className='w-full xl:w-3/7' src={aboutImg2} alt="" />
            <div className='flex flex-col gap-4 w-full xl:w-1/2 xl:px-30 text-2xl font-light'>
              <p>{t('about2')} </p>
              <p>{t('about3')}</p>
            </div>
          </div>
          <div className='xl:my-30 mb-10'>
            <img className='cover w-full' src={aboutImg3} alt="" />
          </div>
          <div className='w-full xl:w-11/12 ml-auto flex flex-col xl:flex-row gap-20 mb-20 h-fit'>
            <div className='flex flex-col xl:pl-10 xl:pr-40 xl:justify-center justify-start items-center gap-6 w-full xl:w-1/2 text-2xl font-light'>
              <p>{t('about4')}</p>
              <p>{t('about5')}</p>
            </div>
            <img className='cover ml-auto' src={aboutImg4} alt="" />
          </div>
        </div>
        <div className='container mx-auto py-10 flex flex-col md:flex-row gap-10 mt-5 items-center justify-center w-full md:relative'>
          <Redes color={'negro'} />
          <BackTop color={'negro'} />
        </div>

      </>

    </div>


  )
}

export default About