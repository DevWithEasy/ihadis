import React from 'react';
import HadithBook from './HadithBook';
import Hadith from './Hadith';
import HadithChapter from './HadithChapter';
import HadithSection from './HadithSection';

const HadithFind = ({ book, chapter, section, hadith }) => {
    // const { book, chapter, section, hadith } = data
    return (
        <div
            className="w-full h-full pb-[58px] pt-4 md:pt-0 md:pb-0 flex flex-col rounded-2xl overflow-y-auto dark:text-gray-300 dark:bg-slate-600 dark:p-2 dark:pt-4 dark:md::pt-2"
        >
            <HadithBook {...{ book }} />

            <HadithChapter {...{ chapter }} />

            <HadithSection {...{ section }} />

            <div
                className='pt-4'
            >
                <Hadith {...{ hadith }} />
            </div>
        </div>
    );
};

export default HadithFind;