import { BiDonateBlood } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import { PiMoonStarsLight } from 'react-icons/pi';
import {AiOutlineMenu} from 'react-icons/ai' 
import { Link } from "react-router-dom";
import logo from "../..//assets/images/home-logo.png";


// eslint-disable-next-line react/prop-types
const Header = ({ open, setOpen }) => {
    return (
        <div
            className='w-full fixed top-0 z-20 flex justify-between items-center p-5 bg-white'
        >
            <div
                className='w-4/12 flex items-center space-x-2'
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
                className='w-4/12 flex justify-end items-center space-x-4'
            >
                <PiMoonStarsLight
                    size={30}
                    className="bg-gray-200 p-1 rounded cursor-pointer"
                />
                <AiOutlineMenu
                    size={30}
                    className="bg-gray-200 p-1 rounded cursor-pointer"
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