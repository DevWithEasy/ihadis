import React from 'react';
import CatList from './CatList';
import SubCatList from './SubCatList';
import CatHeader from './CatHeader';

const SubMenu = ({id,menu,setMenu,state,setState,handleChange}) => {
    return (
        <div
            className='fixed top-0 left-0 h-screen w-full bg-white z-50 overflow-y-auto dark:bg-slate-600'
        >
            <div
                className='sticky top-0 px-2 pb-2 bg-white dark:bg-slate-600'
            >
            <div
                className='p-4 flex justify-between items-center text-xl'
            >
                <span className=''>ক্যাটাগরি</span>
                <span onClick={()=>setMenu(!menu)} className='px-4 cursor-pointer' >X</span>
            </div>
            <CatHeader {...{state,setState}}/>
            </div>
            <div>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <CatList {...{ handleChange }} />
                        :
                        <SubCatList {...{ id, page: 'chapter', handleChange }} />
                    }

                </div>
            </div>
        </div>
    );
};

export default SubMenu;