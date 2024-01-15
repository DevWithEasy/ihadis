import { BiChevronDown, BiChevronRight } from 'react-icons/bi';
import image from '../assets/images/goto.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import useHadithStore from '../store/useStore';

const GoToModal = ({ open, setOpen }) => {
    const { books } = useHadithStore()
    const [view, setView] = useState(false)
    const [book, setBook] = useState(books[0])
    const [hadithId, setHadithId] = useState(0)
    const navigate = useNavigate()
    const handleOpen = (e) => {
        if (e.target.id === 'wrapper') {
            setOpen(false)
        }
    }

    const handleNavigate = (e) => {
        e.preventDefault()
        if(!hadithId){
            return alert('হাদিস নং দিন')
        }
        navigate(`/${book.book_name}/hadith/${hadithId}`)
        setOpen(!open)
    }

    return (
        <div
            id='wrapper'
            onClick={handleOpen}
            className="h-screen w-full fixed top-0 left-0 z-40 bg-slate-900/50 flex justify-center items-center"
        >
            <div
                className="w-11/12 md:w-4/12 mx-auto space-y-5 p-6 bg-white rounded-2xl animate-open dark:bg-slate-700 dark:text-gray-300"
            >
                <h2
                    className='flex space-x-3'
                >
                    <img
                        src={image}
                    />
                    <span className='font-semibold'>হাদিসে যান</span>
                </h2>
                <div
                    className='relative flex px-4 py-3 border rounded-lg'

                >
                    <button
                        onClick={() => setView(!view)}
                        className='w-full flex justify-between items-center'
                    >
                        <span>
                            {books &&
                                // eslint-disable-next-line react/prop-types
                                book?.title
                            }
                        </span>
                        {!view ? <BiChevronRight /> : <BiChevronDown />}
                    </button>
                    {view &&
                        <div
                            className='absolute left-0 top-[58px] h-40 p-2 space-y-1  w-full overflow-y-auto drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white shadow-lg rounded-lg dark:bg-gray-700'
                        >
                            {books.map((book) =>
                                <button
                                    key={book?._id}
                                    onClick={() => {
                                        setBook(book)
                                        setView(!view)
                                    }}
                                    className='w-full text-left px-3 py-1 hover:bg-gray-100 rounded-lg'
                                >
                                    {book?.title}
                                </button>
                            )}
                        </div>
                    }
                </div>
                <form
                    onSubmit={handleNavigate}
                    className='space-y-4'
                >
                    <input
                        type='text'
                        onChange={(e) => setHadithId(e.target.value)}
                        placeholder='Hadith no'
                        className='w-full px-4 py-3 focus:outline-none border focus:border-[#2b9e76] rounded-lg dark:bg-slate-700'
                    />
                    <div
                        className='flex justify-end'
                    >
                        <button
                            className='px-4 py-2 bg-[#2b9e76] text-white text-sm rounded-lg'
                        >
                            প্রয়োগ করুন
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GoToModal;