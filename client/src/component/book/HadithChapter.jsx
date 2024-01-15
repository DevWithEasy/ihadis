import { toBengaliNumber } from 'bengali-number';
import React from 'react';

const HadithChapter = ({ chapter }) => {
    
    return (
        <div
            className='mb-3 p-4 flex items-center space-x-4 bg-white rounded-lg dark:bg-slate-700'
        >
            <div
                className='w-10 h-10 flex justify-center items-center bg-[#2b9e76] text-white text-xl rounded-xl'
            >
                {
                    toBengaliNumber(
                        chapter?.chapter_id ?
                            chapter?.chapter_id :
                            chapter?.id
                    )
                }
            </div>
            <p
                className='text-xl'>
                {
                    chapter?.title ?
                        chapter?.title :
                        chapter?.bn
                }
            </p>
        </div>
    );
};

export default HadithChapter;