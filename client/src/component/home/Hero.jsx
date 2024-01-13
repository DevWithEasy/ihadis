import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import HomeSlider from './HomeSlider';
import SearchSetting from './SearchSetting';
import image from '../../assets/images/bismillah.svg'

const Hero = () => {
    const [view, setView] = useState(false)

    return (
        <div
            // style={{backgroundImage : `url(${image})`}}
            className='w-full pt-28 md:pt-52 pb-10 md:pb-24 flex flex-col justify-center items-center space-y-6 md:space-y-10 bg-[#2b9e76] text-white bg-no-repeat bg-center'
        >
            <h1
                className='text-2xl md:text-5xl font-medium'
            >
                আপনার পছন্দের হাদিস খুঁজুন
            </h1>
            <div
                className='relative w-9/12 md:w-6/12 mx-auto flex justify-between items-center space-x-3 bg-white p-1 rounded-md'
            >
                <input
                    placeholder='Search Hadith'
                    className='w-full px-4 text-black focus:outline-none text-sm'
                />
                <GiSettingsKnobs
                    onClick={() => setView(!view)}
                    size={30}
                    className='text-gray-500 cursor-pointer'
                />
                <button
                    className='md:w-[200px] px-4 py-4 flex justify-center items-center space-x-2 bg-[#36a27c] rounded-xl md:rounded-l-none md:rounded-r-md'
                >
                    <BsSearch />
                    <span className='hidden md:inline-block'>সার্চ করুন</span>
                </button>
                {view &&
                    <SearchSetting {...{ view, setView }} />
                }
            </div>
            <HomeSlider />
        </div>
    );
};

export default Hero;