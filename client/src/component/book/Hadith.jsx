import { toBengaliNumber } from 'bengali-number';
import React, { useState } from 'react';
import { GiBeveledStar } from 'react-icons/gi';
import bookmark from '../../assets/images/bookmark.svg';
import copy from '../../assets/images/copy.svg';
import direct from '../../assets/images/direct.svg';
import report from '../../assets/images/report.svg';
import share from '../../assets/images/share.svg';
import HadithShareModal from '../HadithShareModal';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Hadith = ({ book, hadith }) => {
    const navigate = useNavigate()
    const [shareView, SetShareView] = useState(false)

    const url = hadith?.book ?
        `https://ihadis.onrender.com/${hadith?.book?.book_name}/hadith/${hadith?.hadith_id}`
        :
        `https://ihadis.onrender.com/${book?.book_name}/hadith/${hadith?.hadith_id}`

    const hadithCopy = `${hadith?.narrator}
    
${hadith?.bn}

${hadith?.hadith_key}
হাদিসের মানঃ ${hadith?.grade}
Source: ${url}`

    const handleCopyHadith = () => {
        try {
            navigator.clipboard.writeText(hadithCopy)
            toast('Hadith copied', {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            key={hadith?._id}
            className='p-4 space-y-4 bg-white rounded-lg dark:bg-slate-700'
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
                {hadith?.bn}
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
                    className='md:w-6/12 px-10 md:px-4 pt-3 md:pt-0 flex justify-between md:justify-end space-x-4 border-t md:border-none'
                >
                    <img
                        src={copy}
                        onClick={() => handleCopyHadith(hadith?.bn)}
                        className='cursor-pointer'
                    />
                    <img
                        src={bookmark}
                        className='cursor-pointer'
                    />
                    <img
                        src={share}
                        onClick={() => SetShareView(!shareView)}
                        className='cursor-pointer'
                    />
                    <img
                        src={report}
                        className='cursor-pointer'
                    />
                    <img
                        src={direct}
                        onClick={() => navigate(`/${book?.book_name}/hadith/${hadith?.hadith_id}`)}
                        className='cursor-pointer'
                    />
                </div>
                {shareView &&
                    <HadithShareModal {...{ url, shareView, SetShareView }} />
                }
            </div>

        </div>
    );
};

export default Hadith;