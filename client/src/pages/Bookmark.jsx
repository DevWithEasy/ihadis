import { BiSearch } from 'react-icons/bi';

const Bookmark = () => {
    return (
        <div
            className="w-9/12 h-full mx-auto overflow-y-auto"
        >
            <div
                className="p-4 flex justify-between items-center bg-white rounded-xl"
            >
                <h2
                    className="text-2xl font-medium"
                >
                বুকমার্ক পেইজ
                </h2>
                <div
                        className='flex justify-between items-center space-x-2 p-3 border-2 rounded-lg'
                    >
                        <BiSearch
                            className='text-gray-500'
                        />
                        <input
                            type='text'
                            placeholder='Search for filter'
                            className='font-light text-sm focus:outline-none'
                        />
                    </div>
            </div>
        </div>
    );
};

export default Bookmark;