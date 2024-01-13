import { FaBookOpen } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import Menu from './Menu';
import Hadith from './Hadith';
import HadithBook from './HadithBook';
import HadithChapter from './HadithChapter';
import HadithSection from './HadithSection';


const HadithList = ({name,state,setState, book, chapter, hadiths,page,handleChange }) => {
    const [menu, setMenu] = useState(false)
    return (
        <div
            className="w-full h-full pb-[46px] md:pb-0 flex flex-col rounded-2xl"
        >
            <div
                className="hidden bg-gray-50 h-[52px] mr-2 px-4 py-5 md:flex items-center space-x-2 border-b-2 text-gray-500 rounded-t-2xl"
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
                    onClick={() => setMenu(!menu)}
                    className='md:hidden p-4 my-2 flex items-center space-x-2 bg-white rounded-xl cursor-pointer'
                >
                    <AiOutlineMenu size={20} />
                    <span className="text-xl">{book?.title}</span>
                </div>

                <HadithBook {...{book}}/>

                <HadithChapter {...{chapter}}/>


                <div
                    className='space-y-4'
                >
                    {hadiths &&
                        hadiths.map(section =>
                            <div
                                key={section?._id}
                                className='space-y-2'
                            >
                                <HadithSection {...{section}}/>

                                {
                                    section.hadiths.map(hadith =>
                                        <Hadith key={hadith._id} {...{hadith}}/>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
            {menu &&
                <Menu {...{name,menu,setMenu,state,setState,page,handleChange}}/>
            }
        </div>
    );
};

export default HadithList;