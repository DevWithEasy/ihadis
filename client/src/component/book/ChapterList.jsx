import { toBengaliNumber } from 'bengali-number';
import { Link } from 'react-router-dom';
import useHadithStore from '../../store/useStore';

const ChapterList = ({ name, page, handleChange }) => {
    const { chapters } = useHadithStore()

    const handleChangeChapter = (id) => {
        if (page == 'chapter') {
            handleChange(id)
        }
    }
    return (
        <div
            className="space-y-1"
        >
            {chapters &&
                chapters.map(chapter =>
                    <Link
                        onClick={() => handleChangeChapter(chapter?.chapter_id)}
                        to={`/${name}/${chapter?.chapter_id}`}
                        key={chapter._id}
                        className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-3 rounded-2xl transition-all duration-500 dark:bg-slate-700 dark:text-gray-300"
                    >
                        <div
                            className=""
                        >
                            <div
                                className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white text-gray-400 w-12 h-12 rounded-full dark:bg-slate-600 dark:text-gray-300"
                            >
                                {toBengaliNumber(chapter?.chapter_id)}
                            </div>
                        </div>
                        <div
                            className="w-full"
                        >
                            <p
                                className="group-hover:text-[#2b9e76] font-medium"
                            >
                                {chapter?.title}
                            </p>
                            <p className="text-gray-500 text-sm dark:text-gray-300">
                                হাদিসের রেঞ্জ: {toBengaliNumber(chapter?.hadis_range)}
                            </p>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default ChapterList;