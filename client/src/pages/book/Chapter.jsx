import axios from 'axios';
import { toBengaliNumber } from "bengali-number";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaBookOpen } from 'react-icons/fa';
import { Link, useParams } from "react-router-dom";
import BookDetailsModal from "../../component/BookDetailsModal";
import useHadithStore from "../../store/useStore";
import apiUrl from "../../utils/apiUrl";

// eslint-disable-next-line react/prop-types
const Chapter = () => {
    const { books,chapters,addChapters } = useHadithStore()
    const { name,chapterId } = useParams()
    const [state, setState] = useState('chapter')
    const [book] = useState(books.find(book => book.book_name === name))
    const [chapter,setChapter] = useState(chapters.find(chapter => chapter.id == chapterId))
    const [hadiths,setHadiths] = useState([])
    const [open,setOpen] = useState(false)

    const getChapters = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/api/book/chapter/${id}`)
            if (res.data.status === 200) {
                addChapters(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getHadiths = async (bookId,chapterId) => {
        try {
            const res = await axios.get(`${apiUrl}/api/book/hadith/${bookId}/${chapterId}`)
            if (res.data.status === 200) {
                setHadiths(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChapterChange=(id)=>{
        const findChapter = chapters.find(chapter => chapter.id === id)
        setChapter(findChapter)
    }

    useEffect(() => {
        getChapters(book?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [book?.id])

    useEffect(() => {
        chapter?.id && getHadiths(book?.id,chapter?.id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chapter?.id])

    console.log(hadiths)

    return (
        <div
            className="h-full flex justify-between space-x-6"
        >
            <div className="w-[450px] h-full flex flex-col justify-between bg-white rounded-2xl">
                <div
                    className="h-[250px]"
                >
                    <div
                        className="flex justify-between border-b text-xl"
                    >
                        <button
                            onClick={() => setState('book')}
                            className={`w-1/2 py-3 ${state === 'book' ? 'bg-[#2b9e76] text-white' : ''} rounded-tl-2xl`}
                        >
                            বই
                        </button>
                        <button
                            onClick={() => setState('chapter')}
                            className={`w-1/2 py-3 ${state === 'chapter' ? 'bg-[#2b9e76] text-white' : ''} rounded-tr-2xl`}
                        >
                            অধ্যায়
                        </button>
                    </div>
                    <div>
                        <div
                            className='flex justify-between items-center space-x-2 p-3 m-4 bg-gray-50 rounded-lg'
                        >
                            <BiSearch
                                className='text-gray-500'
                            />
                            <input
                                type='text'
                                placeholder='Search for filter'
                                className='bg-gray-50 w-full font-light text-sm focus:outline-none'
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <div
                            className="space-y-1"
                        >
                            {books &&
                                // eslint-disable-next-line react/prop-types
                                books.map(book =>
                                    <Link
                                        to={`/${book?.book_name}`}
                                        key={book._id}
                                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500"
                                    >
                                        <div
                                            className=""
                                        >
                                            <div
                                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                            >
                                                {book?.abvr_code}
                                            </div>
                                        </div>
                                        <div
                                            className="w-full"
                                        >
                                            <p
                                                className="group-hover:text-[#2b9e76] font-medium"
                                            >
                                                {book?.title}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                হাদিসের রেঞ্জ: {toBengaliNumber(book?.number_of_hadis)}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                        :
                        <div
                            className="space-y-1"
                        >
                            {chapters &&
                                // eslint-disable-next-line react/prop-types
                                chapters.map(chapter =>
                                    <Link
                                        to={`/${name}/${chapter?.id}`}
                                        onClick={() =>handleChapterChange(chapter?.id)}
                                        key={chapter._id}
                                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500"
                                    >
                                        <div
                                            className=""
                                        >
                                            <div
                                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                            >
                                                {toBengaliNumber(chapter?.chapter_id)}
                                            </div>
                                        </div>
                                        <div
                                            className="w-full"
                                        >
                                            <p
                                                className="group-hover:text-[#2b9e76] font-medium"
                                            >
                                                {chapter?.title}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                হাদিসের রেঞ্জ: {toBengaliNumber(chapter?.hadis_range)}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            }
                        </div>
                    }

                </div>
            </div>
            <div
                className="w-full h-full flex flex-col bg-white rounded-2xl"
            >
                <div
                    className="bg-gray-50 h-[52px] px-4 py-5 flex items-center space-x-2 border-b-2 rounded-t-2xl"
                >
                    <FaBookOpen
                        size={20}
                    />
                    <span>&gt;</span>
                    <span className="text-sm">{book?.book_name}</span>
                    <span>&gt;</span>
                    <span className="text-sm">{chapter?.id}</span>
                </div>
                <div
                    className="h-[cal(100%-52px)] px-4 overflow-y-auto"
                >
                    <div
                        className="flex justify-between items-center py-2"
                    >
                        <h2
                            onClick={()=>setOpen(!open)}
                            className="text-[#2b9e76] text-2xl cursor-pointer"
                        >
                            {book?.title}
                        </h2>
                        <div
                            className='flex justify-between items-center space-x-2 p-3 m-4 bg-gray-50 rounded-lg'
                        >
                            <BiSearch
                                className='text-gray-500'
                            />
                            <input
                                type='text'
                                placeholder='Search for filter'
                                className='bg-gray-50 w-full font-light text-sm focus:outline-none'
                            />
                        </div>
                        {open &&
                            <BookDetailsModal {...{
                                open,
                                setOpen,
                                description: book?.book_descr
                            }}/>
                        }
                    </div>
                    <div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Chapter;