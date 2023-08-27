import image from '../assets/images/home-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsBookmark, BsSend } from 'react-icons/bs'
import { BiDonateBlood, BiSearch } from 'react-icons/bi'
import { PiDotsNineBold, PiMoonStarsLight, PiBooksLight } from 'react-icons/pi'
import { useState } from 'react'
import GoToModal from '../component/GoToModal'
import useHadithStore from '../store/useStore'
import MenuPopup from '../component/MenuPopup'
// import {PiBooksFill} from 'react-icons/li'


// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    const { books } = useHadithStore()
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    return (
        <div
            className="h-screen flex bg-white"
        >
            <div
                className='fixed top-0 left-0 w-full p-4 flex justify-between'
            >
                <h1
                    className='flex items-center space-x-4'
                >
                    <img
                        src={image} alt="logo"
                        className='w-10 h-10'
                    />
                    <Link
                        to='/allhadiths'
                        className='text-xl'
                    >
                        হাদিস গ্রন্থসমূহ
                    </Link>
                </h1>
                <div
                    className='flex justify-end items-center space-x-6'
                >
                    <div
                        className='flex justify-between items-center space-x-2 p-3 border-2 rounded-lg'
                    >
                        <BiSearch
                            className='text-gray-500'
                        />
                        <input
                            type='text'
                            placeholder='Search Hadith'
                            className='font-light text-sm focus:outline-none'
                        />
                    </div>
                    <PiMoonStarsLight
                        size={40}
                        className="bg-gray-200 p-2 rounded cursor-pointer"
                    />
                </div>
            </div>
            <div
                className="relative w-24 mt-20 p-4 pb-32 flex flex-col justify-between items-center"
            >
                <NavLink
                    to='/'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <AiOutlineHome
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/allhadiths'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <FiBookOpen
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/allsubjects'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <PiBooksLight
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/bookmark'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <BsBookmark
                        size={28}
                    />
                </NavLink>
                <button
                    onClick={() => setMenu(!menu)}
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <PiDotsNineBold
                        size={28}
                    />

                </button>
                <button
                    onClick={() => setOpen(!open)}
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <BsSend
                        size={28}
                    />
                </button>
                <NavLink
                    to='/donate'
                    className='absolute left-0 bottom-3 translate-x-1/4 p-4 bg-[#2b9e76] text-white rounded-xl'
                >
                    <BiDonateBlood
                        size={28}
                    />
                </NavLink>
            </div>
            <div
                className="relative w-full bg-gray-100 rounded-tl-3xl mt-20 p-4"
            >
                {children}

                {menu &&
                    <MenuPopup {...{ menu, setMenu }} />
                }
            </div>
            {open &&
                <GoToModal {...{ open, setOpen, books }} />
            }
        </div>
    );
};

export default Layout;