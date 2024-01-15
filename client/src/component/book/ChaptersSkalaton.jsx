import { BiSearch } from "react-icons/bi";
import { FaBookOpen } from 'react-icons/fa';
import { Link } from "react-router-dom";
import useHadithStore from "../../store/useStore";


// eslint-disable-next-line react/prop-types
const ChaptersSkalaton = () => {
    const { chapters } = useHadithStore()
    return (
        <div
            className="mt-2 w-full h-full flex flex-col bg-white rounded-2xl dark:bg-slate-600"
        >
            <div
                className="hidden bg-gray-50 h-[52px] px-4 py-5 md:flex items-center space-x-2 border-b-2 rounded-t-2xl dark:bg-slate-500 dark:border-gray-500 dark:text-gray-700"
            >
                <FaBookOpen
                    size={20}
                />
                <span>&gt;</span>
                <span className="text-sm bg-gray-200 inline-block w-20 h-5 rounded-full animate-pulse dark:bg-slate-700"></span>
            </div>
            <div
                className="h-[cal(100%-52px)] px-4 overflow-y-auto"
            >
                <div
                    className="flex justify-between items-center py-2 animate-pulse"
                >
                    <h2

                        className="bg-gray-200 w-40 h-7 rounded-full dark:bg-slate-700"
                    >

                    </h2>
                </div>
                <div
                    className="space-y-2"
                >
                    {chapters &&
                        // eslint-disable-next-line react/prop-types
                        chapters.map(chapter =>
                            <Link
                                key={chapter._id}
                        
                                className="w-full p-5 group cursor-pointer bg-white hover:bg-green-100 flex justify-between items-center space-x-6  md:space-x-2 border-b-[0.5px] border-gray-100 hover:rounded-2xl transition-all duration-500 animate-pulse dark:bg-slate-700 dark:border-none dark:rounded-xl"
                            >
                                <div
                                    className="w-1/12"
                                >
                                    <div
                        
                                        className="flex justify-center items-center bg-gray-200 group-hover:bg-[#2b9e76] group-hover:text-white  w-12 h-12 rounded-full dark:bg-slate-600"
                                    >

                                    </div>
                                </div>
                                <div
                                    className="w-11/12 flex justify-between space-x-10"
                                >
                                    <p
                                        className="w-full h-5 bg-gray-200 rounded-full dark:bg-slate-600"
                                    >

                                    </p>
                                    <p className="bg-gray-200 w-20 h-5 rounded-full dark:bg-slate-600">

                                    </p>
                                </div>
                            </Link>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default ChaptersSkalaton;