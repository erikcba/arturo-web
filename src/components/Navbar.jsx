import React from 'react'
import MenuButton from './MenuButton'



const Navbar = ({abrirMenu, className, bgColor, logo, color, mostrarMenu}) => {
    return (
        <div className=' w-full flex justify-start items-center fixed top-0 left-0 bg-transparent z-30 gap-4'>
            <div className='container mx-auto my-10 pl-10 md:pl-0 flex flex-row md:justify-center justify-between items-center w-full h-full gap-0 md:gap-4'>
                <div className='gap-2 flex flex-col'>
                    <h1 className={`${className} ${color} text-xs md:text-lg font-bold text-lexend tracking-max leading-none`}>ARTURO CASTRO</h1>
                    <h1 className={`${className} ${color} text-xs md:text-lg font-bold text-lexend tracking-max leading-none`}>NOGUERAS</h1>
                </div>
                <MenuButton bgColor={bgColor} isOpen={mostrarMenu} onClick={abrirMenu} />
                <img src={logo} alt="Logo" className='h-22 md:block hidden w-24 object-contain' />
            </div>
        </div>
    )
}

export default Navbar