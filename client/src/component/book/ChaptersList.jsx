/* eslint-disable react/prop-types */
import { toBengaliNumber } from 'bengali-number';
import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaBookOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useHadithStore from '../../store/useStore';
import BookDetailsModal from '../BookDetailsModal';

// eslint-disable-next-line react/prop-types
const ChaptersList = ({name,book}) => {
    const {chapters} = useHadithStore()
    const [open,setOpen] = useState(false)
    return (
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
                    {chapters &&
                                // eslint-disable-next-line react/prop-types
                                chapters.map(chapter =>
                                    <Link
                                    to={`/${name}/${chapter?.chapter_id}`}
                                        key={chapter._id}
                                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-2 border-b-[0.5px] border-gray-100 hover:rounded-2xl transition-all duration-500"
                                    >
                                        <div
                                            className="w-1/12"
                                        >
                                            <div
                                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                            >
                                                {toBengaliNumber(chapter?.chapter_id)}
                                            </div>
                                        </div>
                                        <div
                                            className="w-11/12 flex justify-between"
                                        >
                                            <p
                                                className="group-hover:text-[#2b9e76] font-medium"
                                            >
                                                {chapter?.title}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                {toBengaliNumber(chapter?.hadis_range)}
                                            </p>
                                        </div>
                                    </Link>
                                )
                            }
                    </div>
                    
                </div>
            </div>
    );
};

export default ChaptersList;