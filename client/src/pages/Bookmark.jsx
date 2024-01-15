import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { PiFolderOpenBold } from "react-icons/pi";

const Bookmark = () => {
    const [query,setQuery] = useState('')
    return (
        <div
            className="w-full md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto"
        >
            <div
                className="mt-4 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl dark:bg-slate-600 dark:text-gray-300"
            >
                <h2
                    className="text-2xl font-medium"
                >
                বুকমার্ক পেইজ
                </h2>
                <div
                    className='w-full md:w-9/12 flex justify-between items-center space-x-2 px-4 border-2 rounded-lg dark:border-gray-500'
                >
                    <BiSearch
                        className='text-gray-500 dark:text-gray-300'
                    />
                    <input
                        type='text'
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder='Search for filter'
                        className='w-full py-3 font-light text-sm focus:outline-none dark:bg-slate-600'
                    />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Bookmark;