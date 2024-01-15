import { toBengaliNumber } from 'bengali-number';
import React from 'react';
import { BiBook } from 'react-icons/bi';

const HadithBook = ({ book }) => {
    return (
        <div
            className='hidden mb-4 p-4 md:flex justify-between items-center bg-white md:rounded-b-lg dark:bg-slate-700 dark:rounded-xl dark:pb-3'
        >
            <div className='flex items-center space-x-3'>
                <BiBook
                    size={50}
                    className='text-[#2b9e76]'
                />
                <div>
                    <p className='text-2xl'>
                        {book?.title ? book?.title : book?.bn}
                    </p>
                    <p className='text-sm'>সর্বমোট হাদিসঃ {toBengaliNumber(book?.number_of_hadis)}</p>
                </div>
            </div>
            <p
                className='text-2xl font-arabic font-bold'
            >
                {book?.title_ar && book?.title_ar}
            </p>
        </div>
    );
};

export default HadithBook;