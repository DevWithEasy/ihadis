import { BiSearch } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
const CatHeader = ({ state, setState }) => {
    return (
        <div
            className="md:min-h-[120px]"
        >
            <div
                className="flex justify-between border md:border-none text-xl"
            >
                <button
                    onClick={() => setState('book')}
                    className={`w-1/2 py-3 ${state === 'book' ? 'bg-[#2b9e76] text-white' : 'md:border-b'} md:rounded-tl-2xl`}
                >
                    ক্যাটাগরি
                </button>
                <button
                    onClick={() => setState('chapter')}
                    className={`w-1/2 py-3 ${state === 'chapter' ? 'bg-[#2b9e76] text-white' : 'md:border-b'} md:rounded-tr-2xl`}
                >
                    সাব ক্যাটাগরি
                </button>
            </div>
            <div>
                <div
                    className='flex justify-between items-center space-x-2 p-3 m-4 bg-gray-50 rounded-lg'
                >
                    <BiSearch
                        className='text-gray-500'
                    />
                    <input
                        type='text'
                        placeholder='Search for filter'
                        className='bg-gray-50 w-full font-light text-sm focus:outline-none'
                    />
                </div>
            </div>
        </div>
    );
};

export default CatHeader;