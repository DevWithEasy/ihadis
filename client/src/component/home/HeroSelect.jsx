// eslint-disable-next-line react/prop-types
const HeroSelect = ({ open, setOpen }) => {
    return (
        <div
            className='w-full absolute left-0 top-12 bg-white h-40 border rounded-lg shadow-md'
        >
            <div
                className='h-full px-4 py-2 text-sm overflow-y-auto '
            >
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
            <div
                className='w-full px-4 py-2 absolute left-0 bottom-0 flex justify-between bg-gray-100 text-sm border-t rounded-b-lg'
            >
                <button>
                    সব সিলেক্ট
                </button>
                <button>
                    সব ডিসিলেক্ট
                </button>
                <button
                    onClick={() => setOpen(!open)}
                    className='text-[#2b9e76]'
                >
                    ওকে
                </button>
            </div>
        </div>
    );
};

export default HeroSelect;