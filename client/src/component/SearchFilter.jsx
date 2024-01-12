import React, { useEffect, useState } from 'react'
import { CiFilter } from "react-icons/ci"
import useHadithStore from '../store/useStore'
import apiUrl from '../utils/apiUrl'
import axios from 'axios'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import HeroSelect from './home/HeroSelect'

const SearchFilter = ({ q,book_id,chap_id }) => {
    const { books } = useHadithStore()
    const [book, setBook] = useState(false)
    const [subject, setSubject] = useState(false)
    const [query, setQuery] = useState(q)
    const [bookId, setBookId] = useState(book_id)
    const [chapterId, setChapterId] = useState(chap_id)
    const [chapters, setChapters] = useState([])
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
        <div className="hidden md:block md:w-[450px] h-72 p-4 space-y-2 bg-white rounded-2xl">
            <div
                className='py-2 flex items-center space-x-2 text-[#2b9e76] font-semibold'
            >
                <CiFilter size={25} />
                <span>ফিল্টার</span>
            </div>
            <div
                className='space-y-2'
            >
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
                                সকল বই
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
                                সকল অধ্যায়
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
                    className='px-4 py-1 bg-red-400 text-white rounded-md'
                >
                    ফিল্টার ক্লিয়ার
                </button>
                <button
                    className='px-4 py-1 bg-[#2b9e76] text-white rounded-md'
                >
                    প্রয়োগ করুন
                </button>
            </div>
        </div>
    );
};

export default SearchFilter;