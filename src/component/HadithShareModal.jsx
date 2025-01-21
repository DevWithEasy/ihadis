import React from 'react';
import copy from '../assets/images/copy.svg';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { toast } from 'react-toastify';

const HadithShareModal = ({ url, shareView, SetShareView }) => {
    const handleOpen = (e) => {
        if (e.target.id === 'wrapper') {
            SetShareView(!shareView)
        }
    }
    const handleCopyHadith = () => {
        try {
            navigator.clipboard.writeText(url)
            toast('Hadith copied', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div
            id='wrapper'
            onClick={handleOpen}
            className="h-screen w-full fixed top-0 left-0 z-40 bg-slate-900/50 flex justify-center items-center"
        >
            <div
                className="w-11/12 md:w-4/12 mx-auto space-y-5 p-6 bg-white rounded-2xl animate-open dark:bg-slate-700 dark:text-gray-300"
            >
                <p
                    className='text-xl font-semibold'
                >
                    এই হাদিসটি শেয়ার করুন
                </p>
                <p>সোশ্যাল মিডিয়াতে শেয়ার করুন</p>
                <div
                    className='flex items-center space-x-4'
                >
                    <FaFacebookF 
                        size={30}
                        className='bg-blue-500 text-white p-1 rounded-full'
                    />
                    <FaTwitter 
                        size={30}
                        className='bg-sky-500 text-white p-1 rounded-full'
                    />
                    <FaWhatsapp 
                        size={30}
                        className='bg-green-500 text-white p-1 rounded-full'
                    />
                    <FaTelegramPlane 
                        size={30}
                        className='bg-sky-500 text-white p-1 rounded-full'
                    />
                    <FaLinkedinIn 
                        size={30}
                        className='bg-blue-600 text-white p-1 rounded-full'
                    />
                </div>
                <p>অথবা, লিংক কপি করুন</p>
                <div
                    className='relative'
                >
                    <input
                        value={url}
                        disabled
                        className='w-full p-3 text-sm focus:outline-none bg-white border rounded-lg dark:bg-slate-700 dark:border-gray-500'
                    />
                    <img
                        src={copy}
                        onClick={handleCopyHadith}
                        className='absolute right-2 top-1.5 cursor-pointer bg-white p-1.5'
                    />
                </div>
                <div
                    className='flex justify-end'
                >
                    <button
                        onClick={()=>SetShareView(!shareView)}
                        className='px-4 text-green-500'
                    >
                        ওকে
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HadithShareModal;