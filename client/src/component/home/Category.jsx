import { toBengaliNumber } from 'bengali-number';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";
import subject from '../../assets/images/subject.svg';

// eslint-disable-next-line react/prop-types
const Category = ({categories}) => {
    
    return (
        <div
        className="mx-4 md:w-9/12 md:mx-auto py-5 md:py-10 space-y-5"
        >
            <h2
                className="text-3xl text-center"
            >
                বিষয়ভিত্তিক হাদিস
            </h2>
            <div
                className="w-full flex justify-center items-center"
            >
                <p className="md:w-1/2 text-gray-500 text-center">
                বিষয়ভিত্তিক হাদীস হচ্ছে হাদীসের এমন সংকলন যা বর্ণনাকারী বা সনদ দ্বারা নয় বরং বিষয় অনুসারে সজ্জিত। এর মাধ্যমে ইসলামের নির্দিষ্ট বিষয়গুলোর উপর সহজে জ্ঞানার্জন সম্ভব হয়। এই সঙ্কলন আলেমগণ ও শিক্ষকদের জন্যও সহায়ক হতে পারে যারা নির্দিষ্ট বিষয়ে শিক্ষা প্রদান করতে চাইছেন।
                </p>
            </div>
            <div
                className="grid md:grid-cols-3 gap-4 py-5"
            >
                {categories &&
                    // eslint-disable-next-line react/prop-types
                    categories.map(category=>
                        <div
                        key={category?._id}
                    className="w-full p-5 group cursor-pointer  drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] bg-white flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500"
                >
                    <div
                        className="w-12"
                    >
                        <div
                            className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                        >
                            {toBengaliNumber(category?.id)}
                        </div>
                    </div>
                    <div
                        className="w-full space-y-1"
                    >
                        <p
                            className="group-hover:text-[#2b9e76] font-medium"
                        >
                            {category?.bn}
                        </p>
                        <p className="text-gray-500 text-sm">
                            হাদিসের রেঞ্জ: {toBengaliNumber(category?.number_of_hadis)}
                        </p>
                    </div>
                </div>
                    )
                }
            </div>
            <div
                className="flex justify-center"
            >
                <Link 
                to='/allsubjects'
                className="flex items-center space-x-2 bg-[#2b9e76] px-4 py-3 text-white rounded-xl"
                >
                    <img
                        src={subject}
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

export default Category;