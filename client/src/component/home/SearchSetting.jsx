import { useEffect, useState } from 'react';
import HeroSelect from './HeroSelect';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'
import useHadithStore from '../../store/useStore';
import apiUrl from '../../utils/apiUrl';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const SearchSetting = ({query, view, setView }) => {
    const navigate = useNavigate()
    const { books } = useHadithStore()
    const [book, setBook] = useState(false)
    const [subject, setSubject] = useState(false)
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
            className='absolute -left-3 top-20 z-10 w-full px-6 py-10 bg-white text-black rounded-lg shadow dark:bg-slate-600 dark:text-gray-300'
        >
            <div
                className='flex justify-between gap-4'
            >
                <div
                    className='w-1/2 space-y-2'
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
                    className='w-1/2 space-y-2'
                >
                    <label
                        className='block'
                    >
                        হাদিসের বই সিলেক্ট করুন
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
                    className='px-4 py-2 bg-gray-100 text-sm rounded-md dark:bg-slate-700 dark:text-white'
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
        </div>
    );
};

export default SearchSetting;