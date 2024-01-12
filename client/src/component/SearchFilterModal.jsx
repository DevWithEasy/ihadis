import React from 'react';
import SearchFilter from './SearchFilter';

const SearchFilterModal = ({q,book_id,chap_id,view,setView}) => {
    return (
        <div
            className='fixed left-0 top-0 h-screen w-full bg-black/50 z-10 bg-white'
        >
            <div
                className='w-11/12 p-4 mx-auto bg-white rounded-xl'
            >
                <button
                onClick={()=>setView(!view)}
                    className='text-xl'
                >
                    X
                </button>
                <SearchFilter {...{q,book_id,chap_id}}/>
            </div>
        </div>
    );
};

export default SearchFilterModal;