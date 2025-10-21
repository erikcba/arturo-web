import React from 'react'

const BackTop = ({color}) => {

    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }


    return (
        <button onClick={backToTop} className={` ${color === 'negro' ? 'text-black' : 'text-white'} text-lg font-light mt-5 text-lexend place-content-end leading-none xl:absolute xl:right-0 w-fit text-center hover:scale-110 transition-transform duration-300 hover:cursor-pointer`} >
            BACK TO TOP
        </button>
    )
}

export default BackTop