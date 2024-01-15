import React, { useEffect, useState } from 'react';
import SearchFilter from '../component/SearchFilter';
import { useSearchParams, useNavigate } from 'react-router-dom'
import { CiFilter } from 'react-icons/ci';
import SearchFilterModal from '../component/SearchFilterModal';
import { BiSearch } from 'react-icons/bi'
import axios from 'axios';
import apiUrl from '../utils/apiUrl';
import HadithListSkalaton from '../component/book/HadithListSkalaton';
import SearchHadith from '../component/SearchHadith';
import ReactPaginate from 'react-paginate';
import { toBengaliNumber } from 'bengali-number';
import SearchHadithScalation from '../component/SearchHadithScalation';

const Search = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const q = searchParams.get('q')
    const book_id = searchParams.get('book_id')
    const chap_id = searchParams.get('chap_id')
    const [page, setPage] = useState(searchParams.get('page_no'))
    const [view, setView] = useState(false)
    const [hadiths, setHadiths] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const perPage = 10
    const pageCount = Math.ceil(Number(total) / perPage)

    const searchHadith = async (q, book_id, chap_id) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/book/search/?q=${q}&book_id=${book_id}&chap_id=${chap_id}&page_no=${page}`)
            if (res.data.status === 200) {
                setHadiths(res.data.data)
                setTotal(res.data.total)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const handlePageChange = ({ selected }) => {
        setPage(selected + 1)
        navigate(`/search/?q=${q}&page_no=${selected + 1}`)
    }

    useEffect(() => {
        searchHadith(q, book_id, chap_id, page)
    }, [q, book_id, chap_id, page])

    console.log(pageCount)
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
                    className='md:hidden my-4 p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-slate-600 dark:text-gray-300'
                >
                    <CiFilter size={25} className='text-[#2b9e76]' />
                    <span>ফিল্টার</span>
                </div>
                {loading ?
                    <SearchHadithScalation />
                    :
                    <>
                        <div
                            className='mb-4 p-4 flex items-center space-x-4 bg-white rounded-xl dark:bg-slate-600 dark:text-gray-300'
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
                                    সর্বমোট ফলাফল পাওয়া গেছে : <span className='text-[#2b9e76]'>{toBengaliNumber(total)}</span> টি
                                </p>
                            </div>
                        </div>
                        <div
                            className='space-y-4'
                        >
                            {
                                hadiths.length > 0 && hadiths.map(hadith => <SearchHadith key={hadith._id} {...{ q, hadith }} />)
                            }
                        </div>
                        {total > 10 &&
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageChange}
                                pageRangeDisplayed={2}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                                containerClassName="paginate"
                                previousClassName="previousBtn"
                                nextsClassName="nextBtn"
                                disabledClassName="disabled"
                                activeClassName="active"
                            />
                        }
                    </>
                }
            </div>
            {view &&
                <SearchFilterModal {...{ q, book_id, chap_id, view, setView }} />
            }
        </div>
    );
};

export default Search;