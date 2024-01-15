import { toBengaliNumber } from 'bengali-number';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useHadithStore from '../../store/useStore';
import BookDetailsModal from '../BookDetailsModal';
import { AiOutlineMenu } from "react-icons/ai";
import Menu from './Menu';

const ChaptersList = ({ name, book, state, setState, page, handleChange }) => {
    const { chapters } = useHadithStore()
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const [query, setQuery] = useState('')

    return (
        <div
            className="w-full h-full pb-16 md:pb-0  flex flex-col md:bg-white md:rounded-2xl overflow-hidden"
        >
            <div
                className="hidden h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-gray-50 border-b-2 rounded-t-2xl"
            >
                <FaBookOpen
                    size={20}
                />
                <span>&gt;</span>
                <span className="text-sm">{book?.book_name}</span>
            </div>
            <div
                className="h-[cal(100%-52px)] md:px-4 overflow-y-auto space-y-2 -mb-3 pt-6 pb-2 md:mt-0"
            >
                <div
                    onClick={() => setMenu(!menu)}
                    className='md:hidden p-4 flex items-center space-x-2 bg-white rounded-xl cursor-pointer'
                >
                    <AiOutlineMenu size={20} />
                    <span className="text-xl">{book?.title}</span>
                </div>
                <div
                    className="md:mt-0 p-4 md:p-2 flex flex-col md:flex-row justify-between items-center space-y-2 bg-white md:bg-none rounded-xl md:rounded-none"
                >
                    <h2
                        onClick={() => setOpen(!open)}
                        className="md:w-1/2 text-[#2b9e76] text-2xl cursor-pointer"
                    >
                        {book?.title}
                    </h2>
                    <div
                        className='w-full flex justify-between items-center space-x-2 p-3 md:m-4 bg-gray-50 rounded-lg'
                    >
                        <BiSearch
                            className='text-gray-500'
                        />
                        <input
                            type='text'
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Search for filter'
                            className='bg-gray-50 w-full font-light text-sm focus:outline-none'
                        />
                    </div>
                    {open &&
                        <BookDetailsModal {...{
                            open,
                            setOpen,
                            description: book?.book_descr
                        }} />
                    }
                </div>
                <div
                    className='space-y-2 md:space-y-0'
                >
                    {chapters &&
                        chapters.filter(chapter=>
                            chapter?.title.toLowerCase().includes(query.toLowerCase()) 
                        )
                        .map(chapter =>
                            <Link
                                to={`/${name}/${chapter?.chapter_id}`}
                                key={chapter._id}
                                className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-4 md:space-x-2 md:border-b-[0.5px] border-gray-100 rounded-xl md:hover:rounded-xl transition-all duration-500"
                            >
                                <div
                                    className="w-16"
                                >
                                    <div
                                        className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                    >
                                        {toBengaliNumber(chapter?.chapter_id)}
                                    </div>
                                </div>
                                <div
                                    className="w-11/12 flex flex-col md:flex-row justify-between"
                                >
                                    <p
                                        className="group-hover:text-[#2b9e76] font-medium"
                                    >
                                        {chapter?.title}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        <span className='md:hidden'>হাদিসের রেঞ্জঃ </span>
                                        {toBengaliNumber(chapter?.hadis_range)}
                                    </p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
            {menu &&
                <Menu {...{ name, menu, setMenu, state, setState, page, handleChange }} />
            }
        </div>
    );
};

export default ChaptersList;