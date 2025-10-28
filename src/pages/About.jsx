import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../components/Navbar'
import aboutImg from '../assets/aboutImg.png'
import aboutImg2 from '../assets/aboutImg2.png'
import aboutImg3 from '../assets/aboutImg3.png'
import aboutImg4 from '../assets/aboutImg5.png'
import logoNegro from '../assets/logoNegro.png'
import logoBlanco from '../assets/logoBlanco.png'
import Menu from '../components/Menu'
import { useTranslation, Trans } from 'react-i18next'
import videoAbout2 from '../assets/AC-About_h900px_1.mp4'
import Redes from '../components/Redes'
import BackTop from '../components/BackTop'
import playBtn from '../assets/playBtn.png'
import { useAudio } from '../components/AudioContext';

const About = () => {

  const [mostrarMenu, setMostrarMenu] = useState(false)
  const [animando, setAnimando] = useState(false)
  const scrollPosRef = useRef(0)
  const [playVideo, setPlayVideo] = useState(false)
  const { togglePlay, playing } = useAudio();

  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'visible'
  }, [])

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Retrasa la aplicación de la clase ligeramente para asegurar el renderizado
    // y que la animación se dispare.
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer); // Limpieza
  }, []);

  // Clases condicionales para aplicar la animación
  const textAnimationClass = animate ? 'slide-in-left' : 'opacity-0';
  const imgAnimationClass = animate ? 'slide-in-right' : 'opacity-0';

  const abrirMenu = () => {
    setMostrarMenu(true)
    document.body.style.overflow = 'hidden'
  }

  const togglePlayVideo = () => {
    setPlayVideo(!playVideo)
    if (playing) {
      togglePlay();
    }
  }

  const cerrarMenu = () => {
    setAnimando(true)
    setTimeout(() => {
      setMostrarMenu(false)
      setAnimando(false)
      document.body.style.overflow = 'visible'
      window.scrollTo(0, scrollPosRef.current)
    }, 200)
  }
  return (

    <div className='bg-gris'>
      <Navbar logo={logoNegro} logoBlanco={logoBlanco} logoNegro={logoNegro} mostrarMenu={mostrarMenu} colorLogo={mostrarMenu ? 'white' : 'black'} className={mostrarMenu ? 'text-white' : 'text-black'} abrirMenu={() => {
        if (mostrarMenu) {
          cerrarMenu()
        } else {
          abrirMenu()
        }
      }} />

      <>
        {
          mostrarMenu && <Menu className={animando ? 'animate-slide-up' : 'animate-slide-down'} />
        }
        <div id='top' className='pt-5 xl:pt-8 '>
          <div className='container mx-auto px-10 xl:px-0 flex flex-col md:flex-row min-h-[600px] md:min-h-[700px] justify-center items-center relative'>
            <div className={`flex flex-col gap-3 xl:gap-8 z-20 h-fit absolute md:left-10 xl:left-30 -top-5 md:top-70 2xl:top-40 bottom-0 ${textAnimationClass}`}
              style={{ opacity: 0 }}>
              <h1 className='text-black text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none'>ARTURO</h1>
              <h1 className='text-white text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none py-2 bg-black ml-auto w-fit px-6'>/CASTRO</h1>
              <h1 className='text-black text-4xl text-8-5 font-xxlight text-lexend tracking-widest leading-none'>NOGUERAS</h1>
            </div>
            <img className={`absolute md:right-5 xl:right-10 px-10 xl:px-0 z-10 -bottom-6 xl:top-15 ${imgAnimationClass}`}
              src={aboutImg}
              alt="Imagen de perfil"
              style={{ opacity: 0 }} />
          </div>
          <div className='w-full xl:w-5/7 px-10 xl:px-0 container mx-auto pt-20 xl:pt-44  md:py-20 flex justify-center items-center'>
            <p className='text-2xl xl:text-4xl 2xl:px-35 xl:leading-12 font-light text-left md:text-center'>
              <Trans i18nKey="about1" components={{ 1: <strong className="font-semibold text-black" /> }} />
            </p>
          </div>
          <div className='flex flex-col px-10 xl:px-0 xl:flex-row container mx-auto  justify-center items-center gap-10 my-10'>
            <img className='w-full xl:w-3/7' src={aboutImg2} alt="" />
            <div className='flex flex-col gap-4 w-full xl:w-1/2 2xl:px-30 text-2xl font-light'>
              <p>{t('about2')} </p>
              <p>{t('about3')}</p>
            </div>
          </div>
          <div className='xl:my-30 mb-10 xl:h-[900px]'>
            {
              playVideo ? (
                <video controls autoPlay src={videoAbout2} ></video>
              ) : (
                <div className='relative'>
                  <img onClick={togglePlayVideo} className='xl:h-[900px] w-full hover:cursor-pointer' src={aboutImg3} alt="" />
                  <img src={playBtn} onClick={togglePlayVideo} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer w-24 md:w-auto' alt="" />
                </div>
              )
            }
          </div>
          <div className='w-full px-10 xl:px-0 xl:w-11/12 ml-auto flex flex-col xl:flex-row gap-10 2xl:gap-20 mb-20 h-fit'>
            <div className='flex flex-col 2xl:pl-10 2xl:pr-40 xl:justify-center justify-start items-center gap-6 w-full xl:w-1/2 text-2xl font-light'>
              <p>{t('about4')}</p>
              <p>{t('about5')}</p>
            </div>
            <img className='cover xl:ml-auto' src={aboutImg4} alt="" />
          </div>
        </div>
        <div className='container mx-auto py-10 flex flex-col xl:flex-row gap-10 mt-5 items-center justify-center w-full xl:relative'>
          <Redes color={'negro'} />
          <BackTop color={'negro'} />
        </div>

      </>

    </div>


  )
}

export default About