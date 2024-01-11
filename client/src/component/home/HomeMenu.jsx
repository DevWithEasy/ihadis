import React from 'react';
import logo from "../../assets/images/home-logo.png";
import { Link } from 'react-router-dom';
import { BiDonateBlood } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsSend } from 'react-icons/bs'
import { FaCloudDownloadAlt } from "react-icons/fa";

const HomeMenu = ({ menu, setMenu }) => {

    return (
        <div
            className='fixed top-0 left-0 h-screen w-full bg-white z-50 overflow-y-auto'
        >
            <div
                className='sticky top-0                              bg-white'
            >
                <div
                    className='p-4 flex justify-between items-center text-xl'
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
                    <span onClick={() => setMenu(!menu)} className='px-4 cursor-pointer' >X</span>
                </div>
            </div>
            <div
                className='p-4 space-y-3'
            >
                <Link
                    to=''
                    className='p-2 flex items-center space-x-3 bg-[#2b9e76] text-white hover:bg-gray-50 hover:text-black rounded-xl'
                >
                    <AiOutlineHome size={20}/>
                    <span className='text-lg'>হোম</span>
                </Link>
                <Link
                    to=''
                    className='p-2 flex items-center space-x-3 hover:bg-gray-100 rounded-xl transition-all duration-500'
                >
                    <BsSend size={20} className='text-[#2b9e76]'/>
                    <span className='text-lg'>হাদিসে যান</span>
                </Link>
                <Link
                    to=''
                    className='p-2 flex items-center space-x-3 hover:bg-gray-100 rounded-xl transition-all duration-500'
                >
                    <FiBookOpen size={20} className='text-[#2b9e76]'/>
                    <span className='text-lg'>হাদিস গ্রন্থসমূহ</span>
                </Link>
                <Link
                    to=''
                    className='p-2 flex items-center space-x-3 hover:bg-gray-100 rounded-xl transition-all duration-500'
                >
                    <BiDonateBlood size={20} className='text-[#2b9e76]'/>
                    <span className='text-lg'>সাপোর্ট করুন</span>
                </Link>
                <Link
                    to=''
                    className='p-2 flex items-center space-x-3 hover:bg-gray-100 rounded-xl transition-all duration-500'
                >
                    <FaCloudDownloadAlt size={20} className='text-[#2b9e76]'/>
                    <span className='text-lg'>আমাদের প্রজেক্ট</span>
                </Link>
            </div>
            <div
                className='mx-4 p-4 bg-[#2b9e76] text-white rounded-xl'
            >
                <p
                    className='text-xl font-semibold'
                >
                    আপনিও সদাকায়ে জারিয়াতে অংশ নিন
                </p>
                <p>
                    আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে। আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র কাছে কবুল হবে।
                </p>
                <div
                    className='p-2 flex justify-center'
                >
                    <button
                        className='px-6 py-2 bg-white text-[#2b9e76] rounded-md'
                    >
                    সাপোর্ট করুন
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeMenu;