import { toBengaliNumber } from 'bengali-number';
import { Link } from 'react-router-dom';
import useHadithStore from '../../store/useStore';

// eslint-disable-next-line react/prop-types
const CatList = ({ handleChange }) => {
    const { categories } = useHadithStore()
    return (
        <div
            className="space-y-1"
        >
            {categories &&
                // eslint-disable-next-line react/prop-types
                categories.map(category =>
                    <Link
                        to={`/hadith/subject/category/${category?.id}`}
                        onClick={() => handleChange(category?.id)}
                        key={category?._id}
                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-slate-700 dark:text-gray-300"
                    >
                        <div
                            className=""
                        >
                            <div
                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-600 dark:text-gray-300"
                            >
                                {toBengaliNumber(category?.id)}
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
                            <p className="text-gray-500 text-sm dark:text-gray-300">
                                হাদিসের রেঞ্জঃ {toBengaliNumber(category?.number_of_hadis)}
                            </p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default CatList;