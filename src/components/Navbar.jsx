import React from 'react'
import MenuButton from './MenuButton'
import LogoAnimado from './LogoAnimado'


const Navbar = ({abrirMenu,className,bgColor,logoNegro,logoBlanco,color,mostrarMenu}) => {
    return (
        <div className="w-full flex justify-start items-center top-0 left-0 bg-transparent relative z-50 gap-4">
            <div className="mx-auto my-10 px-10 md:px-10 xl:px-20 flex flex-row md:justify-center items-center w-full h-full gap-0 md:gap-4">
                {/* Izquierda */}
                <div className="gap-2 flex flex-col mr-auto">
                    <h1
                        className={`${className} ${color} text-xs md:text-lg font-bold text-lexend tracking-max leading-none`}
                    >
                        ARTURO CASTRO
                    </h1>
                    <h1
                        className={`${className} ${color} text-xs md:text-lg font-bold text-lexend tracking-max leading-none`}
                    >
                        NOGUERAS
                    </h1>
                </div>

                {/* Centro */}
                <div className="absolute right-8 md:right-auto md:left-1/2 md:-translate-x-1/2">
                    <MenuButton bgColor={bgColor} isOpen={mostrarMenu} onClick={abrirMenu} />
                </div>

                {/* Derecha */}
                {/* <img
                    src={mostrarMenu ? logoBlanco : logoNegro}
                    alt="Logo"
                    className="h-22 md:block hidden w-24 object-contain ml-auto transition-all duration-300"
                /> */}
                <LogoAnimado/>
            </div>
        </div>
    )
}

export default Navbar