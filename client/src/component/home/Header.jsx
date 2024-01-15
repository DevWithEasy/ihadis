import { BiDonateBlood } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import { PiMoonStarsLight } from 'react-icons/pi';
import { AiOutlineMenu } from 'react-icons/ai'
import { Link } from "react-router-dom";
import logo from "../../assets/images/home-logo.png";
import { useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";


const Header = ({ open, setOpen, menu, setMenu }) => {
    const [dark, setDark] = useState(false)

    const darkHandler = () => {
        if (dark) {
            const root = window.document.documentElement;
            root.classList.remove('dark')
            setDark(false)
        } else {
            const root = window.document.documentElement;
            root.classList.add('dark')
            setDark(true)
        }
    }

    return (
        <div
            className='w-full fixed top-0 z-20 flex justify-between items-center p-4 bg-white dark:bg-slate-600 dark:text-gray-300'
        >
            <div
                className='w-1/2 md:w-4/12 flex items-center space-x-2'
            >
                <Link
                    to='/'
                >
                    <img
                        src={logo}
                        className="h-10 w-10"
                    />
                </Link>
                <Link
                    to='/'
                    className="text-2xl font-medium text-[#2b9e76]"
                >
                    আল হাদিস
                </Link>
            </div>
            <div
                className='hidden md:w-4/12 md:flex justify-between items-center font-medium'
            >
                <Link
                    to='/'
                    className="flex items-center space-x-1 px-6 py-2 bg-[#2b9e76] text-white rounded-full"
                >
                    <HiOutlineHome size={20} />
                    <span>হোম</span>
                </Link>
                <button
                    onClick={() => setOpen(!open)}
                    className="p-0.5 hover:text-[#2b9e76]"
                >
                    হাদিসে যান
                </button>
                <Link
                    to='/allhadiths'
                    className="p-0.5 hover:text-[#2b9e76]"
                >
                    হাদিস গ্রন্থসমূহ
                </Link>
                <Link
                    to='/projects'
                    className="p-0.5 hover:text-[#2b9e76]"
                >

                    আমাদের প্রজেক্ট
                </Link>
            </div>
            <div
                className='w-1/2 md:w-4/12 flex justify-end items-center space-x-4'
            >
                {dark ?
                    <PiMoonStarsLight
                        size={30}
                        onClick={darkHandler}
                        className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700"
                    />
                    :
                    <IoSunnyOutline
                        size={30}
                        onClick={darkHandler}
                        className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700"
                    />
                }
                <AiOutlineMenu
                    size={30}
                    onClick={() => setMenu(!menu)}
                    className="md:hidden bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700"
                />
                <Link
                    to='/donate'
                    className="hidden md:flex items-center space-x-1 px-6 py-3 bg-[#2b9e76] text-white rounded"
                >
                    <span>সাপোর্ট করুন</span>
                    <BiDonateBlood />
                </Link>
            </div>
        </div>
    );
};

export default Header;