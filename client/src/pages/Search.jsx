import React, { useEffect, useState } from 'react';
import SearchFilter from '../component/SearchFilter';
import { useSearchParams } from 'react-router-dom'
import { CiFilter } from 'react-icons/ci';
import SearchFilterModal from '../component/SearchFilterModal';
import { BiSearch } from 'react-icons/bi'
import axios from 'axios';
import apiUrl from '../utils/apiUrl';
import HadithListSkalaton from '../component/book/HadithListSkalaton';
import SearchHadith from '../component/SearchHadith';
const Search = () => {
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q')
    const book_id = searchParams.get('book_id')
    const chap_id = searchParams.get('chap_id')
    const [view, setView] = useState(false)
    const [hadiths,setHadiths] = useState([])

    const searchHadith=async(q,book_id,chap_id)=>{
        try {
            const res = await axios.get(`${apiUrl}/api/book/search/?q=${q}&book_id=${book_id}&chap_id=${chap_id}`)
            if (res.data.status === 200) {
                setHadiths(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        searchHadith(q,book_id,chap_id)
    },[q,book_id,chap_id])

    console.log(hadiths)
    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6"
        >
            <div
                className='hidden md:block'
            >
                <SearchFilter {...{ q, book_id, chap_id }} />
            </div>
            <div
                className="w-full h-full pb-[46px] md:pb-0 flex flex-col rounded-2xl overflow-y-auto"
            >
                <div
                    onClick={() => setView(!view)}
                    className='md:hidden my-4 p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer'
                >
                    <CiFilter size={25} className='text-[#2b9e76]' />
                    <span>ফিল্টার</span>
                </div>
                <div
                    className='mb-4 p-4 flex items-center space-x-4 bg-white rounded-xl cursor-pointer'
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
                            সর্বমোট ফলাফল পাওয়া গেছে : <span className='text-[#2b9e76]'>{hadiths.length}</span> টি
                        </p>
                    </div>
                </div>
                {!hadiths ?
                    <HadithListSkalaton/>
                    :
                    hadiths.map(hadith=><SearchHadith key={hadith._id} {...{q,hadith}}/>)
                }
            </div>
            {view &&
                <SearchFilterModal {...{ q, book_id, chap_id, view, setView }} />
            }
        </div>
    );
};

export default Search;