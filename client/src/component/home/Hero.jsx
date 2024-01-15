import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import HomeSlider from './HomeSlider';
import SearchSetting from './SearchSetting';
import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/bismillah.svg'

const Hero = () => {
    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const [query, setQuery] = useState()
    const handleNavigate = () => {
        if (!query) {
            return alert('সার্চিং কুয়্যেরি লিখুন।')
        } else {
            navigate(`/search/?q=${query}`)
        }
    }
    return (
        <div
            // style={{backgroundImage : `url(${image})`}}
            className='w-full pt-28 md:pt-52 pb-10 md:pb-24 flex flex-col justify-center items-center space-y-6 md:space-y-10 bg-[#2b9e76] text-white bg-no-repeat bg-center dark:bg-transparent'
        >
            <h1
                className='text-2xl md:text-5xl font-medium dark:text-gray-300'
            >
                আপনার পছন্দের হাদিস খুঁজুন
            </h1>
            <div
                className='relative w-9/12 md:w-6/12 mx-auto flex justify-between items-center space-x-3 bg-white p-1 rounded-md dark:bg-slate-700 dark:ring-2 dark:ring-gray-500'
            >
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search Hadith'
                    className='w-full px-4 py-4 text-black focus:outline-none text-sm dark:bg-slate-700'
                />
                <GiSettingsKnobs
                    onClick={() => setView(!view)}
                    size={30}
                    className='text-gray-500 cursor-pointer dark:text-white'
                />
                <button
                    onClick={handleNavigate}
                    className='md:w-[200px] px-4 py-4 flex justify-center items-center space-x-2 bg-[#36a27c] rounded-xl md:rounded-l-none md:rounded-r-md'
                >
                    <BsSearch />
                    <span className='hidden md:inline-block'>সার্চ করুন</span>
                </button>
                {view &&
                    <SearchSetting {...{ query, view, setView }} />
                }
            </div>
            <HomeSlider />
        </div>
    );
};

export default Hero;