import { FaBookOpen } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Menu from './Menu';
import Hadith from './Hadith';
import HadithBook from './HadithBook';
import HadithChapter from './HadithChapter';
import HadithSection from './HadithSection';


const HadithList = ({ name, state, setState, book, chapter, hadiths, page, handleChange }) => {
    const [menu, setMenu] = useState(false)
    return (
        <div
            className="w-full h-full pb-[46px] md:pb-0 flex flex-col rounded-2xl overflow-hidden dark:bg-slate-600 dark:text-gray-300"
        >
            <div
                className="hidden h-[52px] px-4 py-5 md:flex items-center space-x-2 bg-gray-50 border-b-2 rounded-t-2xl dark:bg-slate-500 dark:border-gray-500"
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
                className="h-[cal(100%-52px)] overflow-y-auto space-y-2 md:space-y-0 -mb-3 pt-2 md:pt-0 pb-2 md:mt-0 dark:px-2"
            >
                <div
                    className='dark:md:mt-2'
                >
                    <div
                        onClick={() => setMenu(!menu)}
                        className='md:hidden p-4 my-2 flex items-center space-x-2 bg-white rounded-xl cursor-pointer dark:bg-slate-700'
                    >
                        <AiOutlineMenu size={20} />
                        <span className="text-xl">{book?.title}</span>
                    </div>

                    <HadithBook {...{ book }} />

                    <HadithChapter {...{ chapter }} />


                    <div
                        className='space-y-4'
                    >
                        {hadiths &&
                            hadiths.map(section =>
                                <div
                                    key={section?._id}
                                    className='space-y-2'
                                >
                                    <HadithSection {...{ section }} />

                                    {
                                        section.hadiths.map(hadith =>
                                            <Hadith key={hadith._id} {...{ book, hadith }} />
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {menu &&
                <Menu {...{ name, menu, setMenu, state, setState, page, handleChange }} />
            }
        </div>
    );
};

export default HadithList;