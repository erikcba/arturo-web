import React from 'react'
import { useTranslation } from 'react-i18next'

const CalendarCard = ({ date, festival, place }) => {

    const { t } = useTranslation()

    return (
        <div className=' flex flex-col md:flex-row items-center justify-between w-full bg-white gap-4 md:gap-0 p-6 md:p-14'>
            <div className='md:border-l-4 md:border-black  md:pl-6 flex flex-col gap-2 md:gap-5 items-start justify-center'>
                <h2 className='text-xl md:text-3xl text-noto font-semibold text-black uppercase'>
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
                <button className='bg-black text-noto font-light tracking-widest uppercase text-lg md:text-xl text-white px-8 py-5 hover:bg-gray-800 hover:cursor-pointer transition-all duration-300'>
                    {t("moreInfo")}
                </button>
            </div>

        </div>
    )
}

export default CalendarCard