import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci"
import useHadithStore from '../store/useStore'
import apiUrl from '../utils/apiUrl'
import axios from 'axios'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import HeroSelect from './home/HeroSelect'
import { useNavigate } from 'react-router-dom'

const SearchFilter = ({ q, book_id, chap_id,view,setView }) => {
    const navigate = useNavigate()
    const { books } = useHadithStore()
    const [book, setBook] = useState(false)
    const [subject, setSubject] = useState(false)
    const [query, setQuery] = useState(q)
    const [bookId, setBookId] = useState(book_id)
    const [chapterId, setChapterId] = useState(chap_id)
    const [chapters, setChapters] = useState([])
    const bookfind = books.find(book => book?.id == bookId)
    const chapterfind = chapters.find(chapter => chapter?.id == chapterId)

    const handleNavigate = () => {
        if (query == null || !query || bookId== null || chapterId == null) {
            return alert('সার্চিং কুয়্যেরি, বই এবং চেপ্টার বাছাই করুন।')
        } else {
            navigate(`/search/?q=${query}&book_id=${bookId}&chap_id=${chapterId}`)
            view && setView(!view)
        }
    }

    const getChapters = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/api/book/chapter/${id}`)
            if (res.data.status === 200) {
                setChapters(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        bookId && getChapters(bookId)
    }, [bookId])
    
    return (
        <div className="md:w-[350px] h-84 p-4 space-y-3 bg-white rounded-2xl border md:border-none dark:bg-slate-600 dark:text-gray-300">
            <div
                className='py-2 flex items-center space-x-2 text-[#2b9e76] font-semibold'
            >
                <CiFilter size={25} />
                <span>ফিল্টার</span>
            </div>
            <div
                className='space-y-3'
            >
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Search hadith'
                    className='w-full px-4 py-3 text-sm bg-gray-100 rounded-xl focus:outline-none dark:bg-gray-700'
                />
                <div
                    className='w-full space-y-2'
                >
                    <label
                        className='block'
                    >
                        হাদিসের বই সিলেক্ট করুন
                    </label>
                    <div
                        className='relative p-2 flex justify-between items-center border rounded-lg'
                    >
                        <button
                            onClick={() => setBook(!book)}
                            className='w-full flex justify-between items-center'
                        >
                            <span>
                                {
                                    bookfind?.title ?
                                        bookfind?.title :
                                        'সকল বই'
                                }
                            </span>
                            {!subject ? <BiChevronRight /> : <BiChevronDown />}
                        </button>
                        {book &&
                            <HeroSelect {...{
                                open: book,
                                setOpen: setBook,
                                data: books,
                                id: bookId,
                                setId: setBookId
                            }} />
                        }
                    </div>
                </div>
                <div
                    className='w-full space-y-2'
                >
                    <label
                        className='block'
                    >
                        অধ্যায় সিলেক্ট করুন
                    </label>
                    <div
                        className='relative p-2  border rounded-lg'
                    >
                        <button
                            onClick={() => setSubject(!subject)}
                            className='w-full flex justify-between items-center'
                        >
                            <span>
                                {
                                    chapterfind?.title ?
                                        chapterfind?.title :
                                        'সকল অধ্যায়'
                                }
                            </span>
                            {!subject ? <BiChevronRight /> : <BiChevronDown />}
                        </button>
                        {subject &&
                            <HeroSelect {...{
                                open: subject,
                                setOpen: setSubject,
                                data: chapters,
                                id: chapterId,
                                setId: setChapterId
                            }} />
                        }
                    </div>
                </div>
            </div>
            <div
                className='flex justify-end space-x-3 p-2 text-sm'
            >
                <button
                    className='px-4 py-2 bg-red-400 text-white rounded-md'
                >
                    ফিল্টার ক্লিয়ার
                </button>
                <button
                    onClick={() => handleNavigate()}
                    className='px-4 py-2 bg-[#2b9e76] text-white rounded-md'
                >
                    প্রয়োগ করুন
                </button>
            </div>
        </div>
    );
};

export default SearchFilter;