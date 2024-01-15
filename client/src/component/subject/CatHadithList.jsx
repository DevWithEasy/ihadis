import { FaBookOpen } from 'react-icons/fa';
import { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import HadithBook from '../book/HadithBook';
import Hadith from '../book/Hadith';
import HadithChapter from '../book/HadithChapter';
import SubMenu from './SubMenu';


const CatHadithList = ({ id, state, setState, category, categorySub, hadiths, page, handleChange }) => {
    const [menu, setMenu] = useState(false)
    
    return (
        <div
            className="w-full h-full pb-[46px] md:pb-0 flex flex-col rounded-2xl overflow-hidden"
        >
            <div
                className="hidden bg-gray-50 h-[52px] mr-2 px-4 py-5 md:flex items-center space-x-2 border-b-2 text-gray-500 rounded-t-2xl"
            >
                <FaBookOpen
                    size={20}
                />
                <span>&gt;</span>
                <span className="text-sm">{category?.bn}</span>
                <span>&gt;</span>
                <span className="text-sm">{category?.id}</span>
                <span>&gt;</span>
                <span className="text-sm">{categorySub?.id}</span>
            </div>
            <div
                className="h-[cal(100%-52px)] overflow-y-auto"
            >
                <div
                    onClick={() => setMenu(!menu)}
                    className='md:hidden mt-4 p-4 mb-2 flex items-center space-x-2 bg-white rounded-xl cursor-pointer'
                >
                    <AiOutlineMenu size={20} />
                    <span className="text-xl">{category?.bn}</span>
                </div>

                <HadithBook {...{ book: category }} />

                <HadithChapter {...{ chapter: categorySub }} />

                <div
                    className='space-y-4'
                >
                    {hadiths &&
                        hadiths.map(hadith =>
                            <Hadith key={hadith._id} {...{ hadith }} />
                        )
                    }
                </div>
            </div>
            {menu &&
                <SubMenu {...{ id, menu, setMenu, state, setState, page, handleChange }} />
            }
        </div>
    );
};

export default CatHadithList;