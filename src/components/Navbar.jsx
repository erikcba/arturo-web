import React from 'react'

const Navbar = () => {
    return (
        <div className=' w-full h-20 flex justify-start items-center fixed top-0 left-0 bg-transparent z-30 gap-4'>
            <div className='container mx-auto gap-2 mt-32 flex flex-col'>
                <h1 className='text-white text-lg font-bold text-lexend tracking-max leading-none'>ARTURO CASTRO</h1>
                <h1 className='text-white text-lg font-bold text-lexend tracking-max leading-none'>NOGUERAS</h1>
            </div>
        </div>
    )
}

export default Navbar