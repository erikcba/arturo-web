import React, { useEffect } from 'react'
import { Link } from 'react-router'
import flecha from './assets/flecha.png'
import { useAudio } from './components/AudioContext'
import { useTranslation } from 'react-i18next'

const Index = () => {

    const { t } = useTranslation()
    const { i18n } = useTranslation()
    const { playing, togglePlay } = useAudio();

    useEffect(() => {
      if(playing){
        togglePlay();
      }
    }, []);

    // Clase CSS personalizada para los textos con animación
    const animationClass = 'text-wipe-animation';

    return (
        <Link to='/home' className='bg-black h-screen flex justify-center hover:cursor-default items-center w-full'>
            <div className='bg-cover bg-hero bg-no-repeat w-full h-full object-cover z-10' alt="" >
                <div className='z-30 h-full flex justify-end items-center mx-auto px-10 xl:px-0 xl:mr-10'>
                    <div className='text-white flex flex-col gap-1 text-5xl sm:text-7xl lg:[font-size:5rem] 2xl:[font-size:7.5rem] my-auto font-xxlight text-lexend xl:pr-24 leading-none '>
                        <p>{t('title_line_1')} </p>
                        <p>{t('title_line_2')}</p>
                        
                        {/* ELEMENTO ANIMADO 1 */}
                        {i18n.language === 'es' ? (
                            
                            <div className={animationClass} data-text={t('title_line_3')}>
                                {t('title_line_3')}
                            </div>
                        ) : (
                            <p>{t('title_line_3')}</p> // Si no es español, sigue normal
                        )}
                        
                        <p>{t('title_line_4')}</p>
                        
                        {/* ELEMENTO ANIMADO 2 */}
                        {i18n.language === 'en' ? (
                            
                            <div className={animationClass} data-text={t('title_line_5')}>
                                {t('title_line_5')}
                            </div>
                        ) : (
                            <span>{t('title_line_5')}</span> 
                        )}

                        <p>{t('suffix_text')} </p>
                        <p className='uppercase text-sm xl:text-xl font-light mt-20 blink flex md:flex-row flex-col items-center justify-start pl-4 gap-4 xl:gap-8'>{t('cta_continue')}<img src={flecha} alt="" /> </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Index