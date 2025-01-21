import React from 'react';
import SearchFilter from './SearchFilter';

const SearchFilterModal = ({q,book_id,chap_id,view,setView}) => {
    return (
        <div
            className='fixed left-0 top-0 h-screen w-full bg-black/50 z-10 bg-white dark:bg-slate-700/50'
        >
            <div
                className='w-11/12 space-y-5 p-4 mx-auto bg-white rounded-xl  dark:bg-slate-700'
            >
                <button
                onClick={()=>setView(!view)}
                    className='text-xl dark:text-gray-300'
                >
                    X
                </button>
                <SearchFilter {...{q,book_id,chap_id,view,setView}}/>
            </div>
        </div>
    );
};

export default SearchFilterModal;