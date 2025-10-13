import React from 'react'
import MenuButton from './MenuButton'
import logo from '../assets/logo_arturo.png'

const Navbar = ({abrirMenu}) => {
    return (
        <div className=' w-full flex justify-start items-center fixed top-0 left-0 bg-transparent z-30 gap-4'>
            <div className='container mx-auto mt-32  flex flex-row justify-between items-center w-full h-full gap-4'>
                <div className='gap-2 flex flex-col'>
                    <h1 className='text-white text-lg font-bold text-lexend tracking-max leading-none'>ARTURO CASTRO</h1>
                    <h1 className='text-white text-lg font-bold text-lexend tracking-max leading-none'>NOGUERAS</h1>
                </div>
                <MenuButton onClick={abrirMenu} />
                <img src={logo} alt="Logo" className='h-22 w-24 object-contain' />
            </div>
        </div>
    )
}

export default Navbar