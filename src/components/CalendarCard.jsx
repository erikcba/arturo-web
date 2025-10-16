import React from 'react'

const CalendarCard = ({ date, festival, place }) => {
    return (
        <div className=' flex flex-row items-center justify-between w-full bg-white py-10 px-10'>
            <div className='border-l-4 border-black pl-6 flex flex-col gap-5 items-start justify-center'>
                <h2 className='text-3xl text-noto font-semibold text-black uppercase'>
                    {date}
                </h2>
                <div className='flex flex-col gap-1'>
                    <p className='text-left text-noto text-xl font-light leading-none text-black'>
                        {festival}
                    </p>
                    <p className='text-left text-noto text-xl font-light leading-none text-black'>
                        {place}
                    </p>
                </div>
            </div>
            <div>
                <button className='bg-black text-noto font-light tracking-widest uppercase text-xl text-white px-6 py-3 hover:bg-gray-800 hover:cursor-pointer transition-all duration-300'>
                    More information
                </button>
            </div>

        </div>
    )
}

export default CalendarCard