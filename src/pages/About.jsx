import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import aboutImg from '../assets/aboutImg.png'
import aboutImg2 from '../assets/aboutImg2.png'
import aboutImg3 from '../assets/aboutImg3.png'
import aboutImg4 from '../assets/aboutImg5.png'
import logoNegro from '../assets/logoNegro.png'
import Menu from '../components/Menu'
import { useTranslation, Trans } from 'react-i18next'
import Footer from '../components/Footer'

const About = () => {

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
          <>
            <div id='top' className='2xl:pt-72'>
              <div className='container mx-auto  flex flex-row min-h-[700px] justify-center items-center relative'>
                <div className='flex flex-col gap-8 z-20 h-fit absolute left-30 top-10 bottom-0'>
                  <h1 className='text-black text-8-5 font-xxlight text-lexend tracking-widest leading-none'>ARTURO</h1>
                  <h1 className='text-white text-8-5 font-xxlight text-lexend tracking-widest leading-none bg-black ml-auto w-fit px-4'>/CASTRO</h1>
                  <h1 className='text-black text-8-5 font-xxlight text-lexend tracking-widest leading-none'>NOGUERAS</h1>
                </div>
                <img className="absolute right-5 z-10 -top-25" src={aboutImg} alt="" />
              </div>
              <div className='w-5/7 container mx-auto py-20 flex justify-center items-center'>
                <p className='text-4xl font-light text-center'>
                  <Trans i18nKey="about1" components={{ 1: <strong className="font-semibold text-black" /> }} />
                </p>
              </div>
              <div className='flex flex-row container mx-auto  justify-center items-center gap-10 my-10'>
                <img className='w-3/7' src={aboutImg2} alt="" />
                <div className='flex flex-col gap-4 w-1/2 px-30 text-2xl font-light'>
                  <p>{t('about2')} </p>
                  <p>{t('about3')}</p>
                </div>
              </div>
              <div className='xl:my-30'>
                <img className='cover' src={aboutImg3} alt="" />
              </div>
              <div className='w-11/12 ml-auto flex flex-row gap-20 mb-20 h-fit'>
                <div className='flex flex-col pl-10 pr-40 justify-center items-center gap-6 w-1/2 text-2xl font-light'>
                  <p>{t('about4')}</p>
                  <p>{t('about5')}</p>
                </div>
                <img className='cover ml-auto' src={aboutImg4} alt="" />
              </div>
            </div>
            <Footer />
          </>
      }
    </>


  )
}

export default About