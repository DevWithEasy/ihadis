import { useState } from 'react';
import HeroSelect from './HeroSelect';
import { BiChevronDown,BiChevronRight } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
const SearchSetting = ({ view, setView }) => {
    const [book, setBook] = useState(false)
    const [subject, setSubject] = useState(false)
    return (
        <div
            className='absolute -left-3 top-20 z-10 w-full px-6 py-10 bg-white text-black rounded-lg '
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
                        onClick={() => setBook(!book)}
                        className='relative p-2 flex justify-between items-center border rounded-lg'
                    >
                        <span>
                            সকল বই
                        </span>
                        {!book ? <BiChevronRight/>: <BiChevronDown />}
                        {book &&
                            <HeroSelect {...{
                                open: book,
                                setOpen: setBook
                            }} />
                        }
                    </div>
                </div>
                <div
                    onClick={() => setSubject(!subject)}
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
                        <span>
                            সকল বই
                        </span>
                        {!subject ? <BiChevronRight/>: <BiChevronDown />}
                        {subject &&
                            <HeroSelect {...{
                                open: subject,
                                setOpen: setSubject
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
                        type='checkbox'
                    />
                    <label>আংশিক মিল</label>
                </div>
                <div
                    className='p-2 flex items-center space-x-3 '
                >
                    <input
                        type='checkbox'
                    />
                    <label>হুবুহু মিল</label>
                </div>
            </div>
            <div
                className='flex justify-end space-x-4'
            >
                <button
                    onClick={() => setView(!view)}
                    className='px-4 py-2 bg-gray-100 text-sm rounded-md'
                >
                    বাতিল
                </button>
                <button
                    onClick={() => setView(!view)}
                    className='px-4 py-2 bg-[#2b9e76] text-white text-sm rounded-md'
                >
                    সার্চ করুন
                </button>
            </div>
        </div>
    );
};

export default SearchSetting;