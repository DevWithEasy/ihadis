import React, { useState } from 'react';
import SearchFilter from '../component/SearchFilter';
import { useSearchParams } from 'react-router-dom'
import { CiFilter } from 'react-icons/ci';
import SearchFilterModal from '../component/SearchFilterModal';
import { BiSearch } from 'react-icons/bi'
const Search = () => {
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q')
    const book_id = searchParams.get('book_id')
    const chap_id = searchParams.get('chap_id')
    const [view, setView] = useState(false)
    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6"
        >
            <SearchFilter {...{ q, book_id, chap_id }} />
            <div
                className='w-full space-y-2'
            >
                <div
                    onClick={() => setView(!view)}
                    className='md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer'
                >
                    <CiFilter size={25} className='text-[#2b9e76]' />
                    <span>ফিল্টার</span>
                </div>
                <div
                    className='p-4 flex items-center space-x-4 bg-white rounded-xl cursor-pointer'
                >
                    <BiSearch size={45} className='hidden md:block text-[#2b9e76]' />
                    <div
                        className='space-y-2'
                    >
                        <p
                            className='text-xl font-semibold'
                        >
                            আপনি (<span className='text-[#2b9e76]'>{q}</span>) লিখে সার্চ করেছেন
                        </p>
                        <p
                            className=''
                        >
                            সর্বমোট ফলাফল পাওয়া গেছে : <span className='text-[#2b9e76]'>{q}</span> টি
                        </p>
                    </div>
                </div>
            </div>
            {view &&
                <SearchFilterModal {...{ q, book_id, chap_id, view, setView }} />
            }
        </div>
    );
};

export default Search;