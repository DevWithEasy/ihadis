import { BiSearch } from 'react-icons/bi';

const Bookmark = () => {
    return (
        <div
            className="w-full md:w-9/12 px-2 pb-10 h-full mx-auto overflow-y-auto"
        >
            <div
                className="mt-2 md:mt-0 p-4 flex flex-col md:flex-row md:justify-between items-center space-y-3 md:space-y-0 bg-white rounded-xl"
            >
                <h2
                    className="text-2xl font-medium"
                >
                বুকমার্ক পেইজ
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
        </div>
    );
};

export default Bookmark;