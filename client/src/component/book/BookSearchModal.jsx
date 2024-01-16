import { useEffect, useState } from 'react';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import useHadithStore from '../../store/useStore';
import HeroSelect from '../home/HeroSelect';
import axios from 'axios';
import apiUrl from '../../utils/apiUrl';
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BookSearchModal = ({ view, setView }) => {
    const navigate = useNavigate()
    const { books } = useHadithStore()
    const [book, setBook] = useState(false)
    const [subject, setSubject] = useState(false)
    const [query, setQuery] = useState()
    const [bookId, setBookId] = useState()
    const [chapterId, setChapterId] = useState()
    const [chapters, setChapters] = useState([])
    const bookfind = books.find(book => book?.id == bookId)
    const chapterfind = chapters.find(chapter => chapter?.id == chapterId)

    const handleNavigate = () => {
        if (!query || !bookId || !chapterId) {
            return alert('সার্চিং কুয়্যেরি, বই এবং চেপ্টার বাছাই করুন।')
        } else {
            navigate(`/search/?q=${query}&book_id=${bookId}&chap_id=${chapterId}`)
            setView(false)
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
        <div
            className='fixed left-0 top-0 h-screen w-full  pt-10 bg-black/50 z-10 dark:bg-slate-700/50'
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: -1000,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.3,
                }}
                className='w-11/12 p-4 mx-auto bg-white rounded-xl dark:bg-slate-700 dark:text-gray-300'
            >
                <div
                    className='space-y-5'
                >
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder='Search hadith'
                        className='w-full px-4 py-3 text-sm bg-gray-100 rounded-xl focus:outline-none dark:bg-slate-600'
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
                    className='py-2 flex space-x-4'
                >
                    <div
                        className='p-2 flex items-center space-x-3 '
                    >
                        <input
                            id='something'
                            type='checkbox'
                        />
                        <label
                            htmlFor='something'
                        >
                            আংশিক মিল
                        </label>
                    </div>
                    <div
                        className='p-2 flex items-center space-x-3 '
                    >
                        <input
                            id='full'
                            type='checkbox'
                        />
                        <label
                            htmlFor='full'
                        >
                            হুবুহু মিল
                        </label>
                    </div>
                </div>
                <div
                    className='flex justify-end space-x-4'
                >
                    <button
                        onClick={() => setView(!view)}
                        className='px-4 py-2 bg-gray-100 text-sm rounded-md dark:bg-slate-600'
                    >
                        বাতিল
                    </button>
                    <button
                        onClick={() => handleNavigate()}
                        className='px-4 py-2 bg-[#2b9e76] text-white text-sm rounded-md'
                    >
                        সার্চ করুন
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default BookSearchModal;