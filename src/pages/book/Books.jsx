import { toBengaliNumber } from "bengali-number";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import useHadithStore from "../../store/useStore";
import { useState } from "react";

const Books = () => {
    const { books } = useHadithStore()
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
                    সকল বই
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
            <div
                className="grid md:grid-cols-2 gap-2 md:gap-4 py-5"
            >
                {books &&
                    books.filter(book=>
                        book?.book_name.toLowerCase().includes(query.toLowerCase()) ||
                        book?.title.toLowerCase().includes(query.toLowerCase()) 
                    )
                    .map(book =>
                        <Link to={`/${book?.book_name}`}
                            key={book._id}
                            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-4 rounded-2xl transition-all duration-500 dark:bg-slate-600 dark:text-gray-300"
                        >
                            <div
                                className="w-16"
                            >
                                <div
                                    className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-500 dark:text-gray-300"
                                >
                                    {book?.abvr_code}
                                </div>
                            </div>
                            <div
                                className="w-full"
                            >
                                <p
                                    className="group-hover:text-[#2b9e76] font-medium"
                                >
                                    {book?.title}
                                </p>
                                <p className="text-gray-500 text-sm dark:text-gray-300">
                                    হাদিসের রেঞ্জ: {toBengaliNumber(book?.number_of_hadis)}
                                </p>
                            </div>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Books;