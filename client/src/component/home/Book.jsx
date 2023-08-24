import { Link } from "react-router-dom";
import book from '../../assets/images/book.svg'
import subject from '../../assets/images/subject.svg'
import {BsArrowRight} from 'react-icons/bs'

// eslint-disable-next-line react/prop-types
const Book = ({heading,paragraph,type,data}) => {
    return (
        <div
            className=" md:w-9/12 mx-auto py-10 space-y-5"
        >
            <h2
                className="text-3xl text-center"
            >
                {heading}
            </h2>
            <div
                className="w-full flex justify-center items-center"
            >
                <p className="w-1/2 text-center">
                    {paragraph}
                </p>
            </div>
            <div
                className="grid grid-cols-3 gap-4 py-5"
            >
                <div
                    className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center rounded-2xl transition-all duration-500"
                >
                    <div
                        className="w-3/12"
                    >
                        <div
                            className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                        >
                            SB
                        </div>
                    </div>
                    <div
                        className="w-9/12"
                    >
                        <p
                            className="group-hover:text-[#2b9e76] font-medium"
                        >
                            সহিহ বুখারী
                        </p>
                        <p className="text-gray-500 text-sm">
                            হাদিসের রেঞ্জ: ৭৫৬৩</p>
                    </div>
                </div>
                <div
                    className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center rounded-2xl"
                >
                    <div
                        className="w-3/12"
                    >
                        <div
                            className="flex justify-center items-center bg-gray-200 text-gray-400 w-12 h-12 rounded-full"
                        >
                            SB
                        </div>
                    </div>
                    <div
                        className="w-9/12"
                    >
                        <p
                            className=""
                        >
                            সহিহ বুখারী
                        </p>
                        <p className="text-gray-500">
                            হাদিসের রেঞ্জ: ৭৫৬৩</p>
                    </div>
                </div>
                <div
                    className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center rounded-2xl"
                >
                    <div
                        className="w-3/12"
                    >
                        <div
                            className="flex justify-center items-center bg-gray-200 text-gray-400 w-12 h-12 rounded-full"
                        >
                            SB
                        </div>
                    </div>
                    <div
                        className="w-9/12"
                    >
                        <p
                            className=""
                        >
                            সহিহ বুখারী
                        </p>
                        <p className="text-gray-500">
                            হাদিসের রেঞ্জ: ৭৫৬৩</p>
                    </div>
                </div>
                <div
                    className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center rounded-2xl"
                >
                    <div
                        className="w-3/12"
                    >
                        <div
                            className="flex justify-center items-center bg-gray-200 text-gray-400 w-12 h-12 rounded-full"
                        >
                            SB
                        </div>
                    </div>
                    <div
                        className="w-9/12"
                    >
                        <p
                            className=""
                        >
                            সহিহ বুখারী
                        </p>
                        <p className="text-gray-500">
                            হাদিসের রেঞ্জ: ৭৫৬৩</p>
                    </div>
                </div>
            </div>
            <div
                className="flex justify-center"
            >
                <Link 
                to=''
                className="flex items-center space-x-2 bg-[#2b9e76] px-4 py-3 text-white rounded-xl"
                >
                    <img
                        src={type == 'hadis' ? book : subject}
                        className=""
                    />
                    <span>
                        সকল হাদিস গ্রন্থসমূহ
                    </span>
                    <BsArrowRight/>
                </Link>
            </div>
        </div>
    );
};

export default Book;