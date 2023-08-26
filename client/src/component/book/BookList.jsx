import { toBengaliNumber } from 'bengali-number';
import { Link } from 'react-router-dom';
import useHadithStore from '../../store/useStore';

// eslint-disable-next-line react/prop-types
const BookList = ({ handleChange }) => {
    const { books } = useHadithStore()
    return (
        <div
            className="space-y-1"
        >
            {books &&
                // eslint-disable-next-line react/prop-types
                books.map(book =>
                    <Link
                        to={`/${book?.book_name}`}
                        onClick={() => handleChange(book?.book_name)}
                        key={book._id}
                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500"
                    >
                        <div
                            className=""
                        >
                            <div
                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full"
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
                            <p className="text-gray-500 text-sm">
                                সর্বমোট হাদিসঃ {toBengaliNumber(book?.number_of_hadis)}
                            </p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default BookList;