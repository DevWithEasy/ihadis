import React from 'react';
import hadithBook from '../../assets/images/book.svg';
import { GiBlackBook } from "react-icons/gi";

const HadithSection = ({ section }) => {
    return (
        <div
            className='p-4 bg-white rounded-lg space-y-3 dark:bg-slate-700'
        >
            <div
                className='flex items-center space-x-3'
            >
                <GiBlackBook
                    size={25}
                    className='text-[#2b9e76]'
                />
                <p>{section?.number}</p>
            </div>
            <p>{section?.title}</p>
            <hr />
            <p>{section?.preface}</p>
        </div>
    );
};

export default HadithSection;