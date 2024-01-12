import { BiSearch } from "react-icons/bi";
import useHadithStore from "../../store/useStore";
import { toBengaliNumber } from "bengali-number";
import { Link } from "react-router-dom";

const Subjects = () => {
    const {categories} = useHadithStore()
    
    return (
        <div
            className="md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto"
        >
            <div
                className="mt-2 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl"
            >
                <h2
                    className="text-2xl font-medium"
                >
                বিষয়ভিত্তিক হাদিস
                </h2>
                <div
                    className='w-full md:w-9/12 flex justify-between items-center space-x-2 p-3 border-2 rounded-lg'
                >
                        <BiSearch
                        className='text-gray-500'
                    />
                    <input
                        type='text'
                        placeholder='Search for filter'
                        className='w-full font-light text-sm focus:outline-none'
                    />
                    </div>
            </div>
            <div
                className="grid md:grid-cols-2 gap-2 md:gap-4 py-5"
            >
                {categories &&
                    categories.map(category =>
                        <Link
                            to={`/hadith/subject/category/${category.id}`}
                            key={category._id}
                            className="w-full p-5 group cursor-pointer bg-white flex justify-between items-center space-x-2 rounded-2xl transition-all duration-500"
                        >
                            <div
                                className="w-16"
                            >
                                <div
                                    className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
                                >
                                    {category?.id}
                                </div>
                            </div>
                            <div
                                className="w-full"
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
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Subjects;