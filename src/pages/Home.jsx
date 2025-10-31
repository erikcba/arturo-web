import React, { useEffect, useState  } from 'react'
import Menu from '../components/Menu';
import Navbar from '../components/Navbar';
import logoBlanco from '../assets/logoBlanco.png'
import videoFondo from '../assets/AC_Inicio_1.mp4'
import { useAudio } from '../components/AudioContext';

const Home = () => {
    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [animando, setAnimando] = useState(false)
    const { playing, playFromStart } = useAudio();

    useEffect(() => {
      if(!playing){
        playFromStart();
      }
    }, []);
    


    const cerrarMenu = () => {
        setAnimando(true)
        setTimeout(() => {
            setMostrarMenu(false)
            setAnimando(false)
        }, 200)
    }

    const abrirMenu = () => {
        setMostrarMenu(true)
    }

    return (
        <div className='relative h-screen flex flex-col w-full overflow-hidden'>

            <video
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 h-full w-full object-cover z-0" // Posiciona y escala
            >
                <source src={videoFondo} type="video/mp4" />
                Tu navegador no soporta la etiqueta de video.
            </video>
            <div className="absolute inset-0 bg-black/50 z-[1]" aria-hidden="true"></div>

            <div className="relative z-10 flex flex-col h-full w-full">

                <Navbar logo={logoBlanco} bgColor={'bg-white'} logoBlanco={logoBlanco} logoNegro={logoBlanco} mostrarMenu={mostrarMenu} className={mostrarMenu ? 'text-white' : 'text-white'} abrirMenu={() => {
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
                    <div className='container mx-auto my-auto w-full flex flex-col px-10 2xl:px-0 gap-12 xl:gap-20 2xl:gap-42'>
                        <h1 className='text-white text-3xl lg:text-6xl xl:[font-size:5.5rem] 2xl:[font-size:7.5rem] font-extralight text-lexend tracking-max leading-none sm:ml-30 xl:ml-0'>ARTURO</h1>
                        <h1 className='text-white text-3xl lg:text-6xl xl:[font-size:5.5rem] 2xl:[font-size:7.5rem] font-extralight text-lexend tracking-max leading-none ml-10 sm:ml-80 xl:ml-auto bg-zinc-950/30 w-fit pl-4 py-4'>CASTRO/</h1>
                    </div>
                </>
            </div>
        </div>
    )
}

export default Home