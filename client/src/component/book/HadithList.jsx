/* eslint-disable react/prop-types */
import { FaBookOpen } from 'react-icons/fa';
import bookmark from '../../assets/images/bookmark.svg';
import copy from '../../assets/images/copy.svg';
import direct from '../../assets/images/direct.svg';
import hadithBook from '../../assets/images/hadith.svg';
import report from '../../assets/images/report.svg';
import share from '../../assets/images/share.svg';
import { BiBook } from 'react-icons/bi';
import { toBengaliNumber } from 'bengali-number';
import { GiBeveledStar } from 'react-icons/gi';

// eslint-disable-next-line react/prop-types
const HadithList = ({ book, chapter, hadiths }) => {
    console.log(hadiths)
    return (
        <div
            className="w-full h-full flex flex-col rounded-2xl"
        >
            <div
                className="bg-gray-50 h-[52px] mr-2 px-4 py-5 flex items-center space-x-2 border-b-2 rounded-t-2xl"
            >
                <FaBookOpen
                    size={20}
                />
                <span>&gt;</span>
                <span className="text-sm">{book?.book_name}</span>
                <span>&gt;</span>
                <span className="text-sm">{chapter?.id}</span>
            </div>
            <div
                className="h-[cal(100%-52px)] overflow-y-auto"
            >
                <div
                    className='mb-4 p-4 flex justify-between items-center bg-white rounded-b-lg'
                >
                    <div className='flex items-center space-x-3'>
                        <BiBook
                            size={50}
                            className='text-[#2b9e76]'
                        />
                        <div>
                            <p className='text-2xl'>
                                {book?.title}
                            </p>
                            <p className='text-sm'>সর্বমোট হাদিসঃ {toBengaliNumber(book?.number_of_hadis)}</p>
                        </div>
                    </div>
                    <p
                        className='text-2xl font-bold'
                    >
                        {book?.title_ar}
                    </p>
                </div>

                <div
                    className='mb-3 p-4 flex items-center space-x-4 bg-white rounded-lg'
                >
                    <div
                        className='w-10 h-10 flex justify-center items-center bg-[#2b9e76] text-white text-xl rounded-xl'
                    >
                        {toBengaliNumber(chapter?.chapter_id)}
                    </div>
                    <p className='text-xl'>{chapter?.title}</p>
                </div>


                <div
                    className='space-y-4'
                >
                    {hadiths &&
                        hadiths.map(section =>
                            <div
                                key={section?._id}
                                className='space-y-2'
                            >
                                <div
                                    className='p-4 bg-white rounded-lg space-y-3'
                                >
                                    <div
                                        className='flex items-center space-x-3'
                                    >
                                        <img
                                            src={hadithBook}
                                            className=''
                                        />
                                        <p>{section?.number}</p>
                                    </div>
                                    <p>{section?.title}</p>
                                    <hr />
                                    <p>{section?.preface}</p>
                                </div>
                                {
                                    section.hadiths.map(hadith =>
                                        <div
                                            key={hadith._id}
                                            className='p-4 space-y-4 bg-white rounded-lg'
                                        >
                                            <p
                                                className='flex items-center space-x-2 text-[#2b9e76] '
                                            >
                                                <GiBeveledStar
                                                    size={25}
                                                    className=''
                                                />
                                                <span className='font-medium text-xl'>
                                                    {toBengaliNumber(hadith?.hadith_id)}
                                                </span>
                                            </p>
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
                                                className='py-2 flex justify-between'
                                            >
                                                <div
                                                    className='w-7/12 space-x-3'
                                                >
                                                    <span>হাদিসের মানঃ </span>
                                                    <span className='bg-[#46B891] text-white text-sm px-2 py-1 rounded-md'>{hadith?.grade}</span>
                                                </div>
                                                <div
                                                    className='w-4/12 px-4 flex justify-between'
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
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HadithList;