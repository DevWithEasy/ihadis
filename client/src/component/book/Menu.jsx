import React from 'react';
import BookHeader from './BookHeader';
import BookList from './BookList';
import ChapterList from './ChapterList';
import {motion} from 'framer-motion'

const Menu = ({ name, menu, setMenu, state, setState, page, handleChange }) => {
    
    return (
        <motion.div
            initial={{
                opacity: 0,
                x : -1000,
            }}
            animate={{
                opacity: 1,
                x : 0,
            }}
            transition={{
                duration : 0.5,
            }}
            className='fixed top-0 left-0 h-screen w-full bg-white z-50 overflow-y-auto dark:bg-slate-600'
        >
            <div
                className='sticky top-0 px-2 pb-2 bg-white dark:bg-slate-600'
            >
                <div
                    className='p-4 flex justify-between items-center text-xl'
                >
                    <span className=''>ক্যাটাগরি</span>
                    <span onClick={() => setMenu(!menu)} className='px-4 cursor-pointer' >X</span>
                </div>
                <BookHeader {...{ state, setState }} />
            </div>
            <div>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <BookList {...{ handleChange }} />
                        :
                        <ChapterList {...{ name, page: 'book', handleChange }} />
                    }

                </div>
            </div>
        </motion.div>
    );
};

export default Menu;