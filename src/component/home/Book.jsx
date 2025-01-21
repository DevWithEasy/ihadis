import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { BiBook } from 'react-icons/bi';
import { toBengaliNumber } from 'bengali-number';

// eslint-disable-next-line react/prop-types
const Book = ({ books }) => {
    return (
        <div
        className="mx-4 md:w-9/12 md:mx-auto py-5 md:py-10 space-y-5 dark:text-gray-300"
        >
            <h2
                className="text-3xl text-center"
            >
                হাদিসের বইসমূহ
            </h2>
            <div
                className="w-full flex justify-center items-center"
            >
                <p className="md:w-1/2 text-gray-500 text-center dark:text-gray-300">
                    হাদিসের কিতাবগুলো মুসলিমদের জন্য হেদায়েত এবং অনুপ্রেরণার একটি গুরুত্বপূর্ণ উৎস। এই কিতাবগুলো মহানবী মুহাম্মদ (সাল্লাল্লাহু আলাইহি ওয়া সালাম)-এর সীরাত(জীবনী) ও দিক-নির্দেশনার প্রতি অন্তর্দৃষ্টি প্রদান করে।
                </p>
            </div>
            <div
                className="grid md:grid-cols-3 gap-4 py-5"
            >
                {books &&
                    books.slice(0, 9).map(book =>
                        <Link
                            to={`/${book?.book_name}`}
                            key={book._id}
                            className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-slate-600"
                        >
                            <div
                                className="w-12"
                            >
                                <div
                            className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-500"
                        >
                                    {book?.abvr_code}
                                </div>
                            </div>
                            <div
                                className="w-full space-y-1"
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
            <div
                className="flex justify-center"
            >
                <Link
                    to='/allhadiths'
                    className="flex items-center space-x-2 bg-[#2b9e76] px-4 py-3 text-white rounded-xl"
                >
                    <BiBook
                        size={20}
                    />
                    <span>
                        সকল হাদিস গ্রন্থসমূহ
                    </span>
                    <BsArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Book;