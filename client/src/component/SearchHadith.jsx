import { toBengaliNumber } from 'bengali-number';
import React from 'react';
import { GiBeveledStar } from 'react-icons/gi';
import bookmark from '../assets/images/bookmark.svg';
import copy from '../assets/images/copy.svg';
import direct from '../assets/images/direct.svg';
import report from '../assets/images/report.svg';
import share from '../assets/images/share.svg';

const SearchHadith = ({ q, hadith }) => {
    return (
        <div
            key={hadith?._id}
            className='p-4 space-y-4 bg-white rounded-lg dark:bg-slate-600 dark:text-gray-300'
        >
            <div
                className='flex justify-between items-center text-[#2b9e76] '
            >
                <div
                    className='flex items-center space-x-2'
                >
                    <GiBeveledStar
                    size={25}
                    className=''
                />
                <span className='font-medium text-xl'>
                    {hadith?.book && `${hadith?.book?.title}: `} {toBengaliNumber(hadith?.hadith_id)}
                </span>
                </div>
                <span
                        style={{ backgroundColor: hadith?.grade_color }}
                        className='md:hidden text-white text-sm px-2 py-1 rounded-md'
                    >{hadith?.grade}</span>

            </div>
            <p
                className='text-4xl text-justify leading-[50px] font-arabic'
            >
                {hadith?.ar}
            </p>
            <p
                className='text-[#2b9e76]'
            >
                {hadith?.narrator}
            </p>
            <p className='leading-8'>
                {hadith?.bn.split(' ').map((word, index) => (
                <span key={index} className={word.includes(q) && 'text-orange-500 font-semibold'}>
                    {word}{' '}
                </span>
            ))}
            </p>
            <div
                className='py-2 md:flex justify-between'
            >
                <div
                    className='hidden md:block md:w-6/12 space-x-3'
                >
                    <span>হাদিসের মানঃ </span>
                    <span
                        style={{ backgroundColor: hadith?.grade_color }}
                        className='text-white text-sm px-2 py-1 rounded-md'
                    >{hadith?.grade}</span>
                </div>
                <div
                    className='md:w-6/12 px-4 pt-2 md:pt-0 flex justify-between md:justify-end space-x-2 border-t md:border-none'
                >
                    <img
                        src={copy}
                    />
                    <img
                        src={bookmark}
                    />
                    <img
                        src={share}
                    />
                    <img
                        src={report}
                    />
                    <img
                        src={direct}
                    />
                </div>
            </div>

        </div>
    );
};

export default SearchHadith;