import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import HomeSlider from './HomeSlider';
import SearchSetting from './SearchSetting';
import image from '../../assets/images/bismillah.svg'

const Hero = () => {
    const [view,setView] = useState(false)
    
    return (
        <div
            className='md:min-h-[30rem] h-[40rem]'
        >

            <div
                className='absolute h-full w-full bg-[#2b9e76] overflow-hidden'
            >
                <div
                    className='relative container h-full md:w-9/12 mx-auto flex flex-col justify-center items-center space-y-10 text-white '
                >
                    <img
                        src={image}
                        className='absolute w-full h-full object-fit opacity-[0.15]'
                    />
                    <h1
                        className='text-2xl md:text-5xl font-medium z-10'
                    >
                        আপনার পছন্দের হাদিস খুঁজুন
                    </h1>
                    <div
                        className='relative md:w-7/12 mx-auto flex justify-between items-center space-x-3 bg-white p-1 rounded-md'
                    >
                        <input
                            placeholder='Search Hadith'
                            className='w-full px-4 text-black focus:outline-none text-sm'
                        />
                        <GiSettingsKnobs
                            onClick={()=>setView(!view)}
                            size={30}
                            className='text-gray-500 cursor-pointer'
                        />
                        <button
                            className='w-[200px] py-4 flex justify-center items-center space-x-2 bg-[#36a27c] rounded-r-md'
                        >
                            <BsSearch />
                            <span>সার্চ করুন</span>
                        </button>
                        {view && 
                            <SearchSetting {...{view,setView}}/>
                        }
                    </div>
                    <HomeSlider/>
                </div>
            </div>

        </div>
    );
};

export default Hero;