import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsBookmarkFill, BsSend } from 'react-icons/bs';
import { FaBookOpen } from 'react-icons/fa';
import { PiBooksFill } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const NavigationFooter = ({open, setOpen}) => {
    return (
        <div
            className='md:hidden fixed bottom-0 left-0 w-full px-4 py-2 flex justify-between bg-white shadow border-t z-10 dark:bg-slate-600 dark:text-gray-300 dark:border-t-0'
        >
            <NavLink
                to='/'
                className='p-2 hover:bg-gray-100 hover:text-black rounded-xl'
            >
                <AiFillHome
                    size={20}
                />
            </NavLink>
            <NavLink
                to='/allhadiths'
                className='p-2 hover:bg-gray-100 hover:text-black rounded-xl'
            >
                <PiBooksFill
                    size={20}
                />
            </NavLink>
            <NavLink
                to='/hadith/subject/category'
                className='p-2 hover:bg-gray-100 hover:text-black rounded-xl'
            >
                <FaBookOpen
                    size={20}
                />
            </NavLink>
            <NavLink
                to='/bookmark'
                className='p-2 hover:bg-gray-100 hover:text-black rounded-xl'
            >
                <BsBookmarkFill
                    size={20}
                />
            </NavLink>
            <button
                onClick={() => setOpen(!open)}
                className='p-2 hover:bg-gray-100 hover:text-black rounded-xl'
            >
                <BsSend
                    size={20}
                />
            </button>
        </div>
    );
};

export default NavigationFooter;