import React from 'react';
import BookHeader from './BookHeader';
import BookList from './BookList';
import ChapterList from './ChapterList';

const Menu = ({name,menu,setMenu,state,setState,page,handleChange}) => {
    console.log(page)
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
                <span className=''>ক্যাটাগরি</span>
                <span onClick={()=>setMenu(!menu)} className='px-4 cursor-pointer' >X</span>
            </div>
            <BookHeader {...{state,setState}}/>
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
        </div>
    );
};

export default Menu;