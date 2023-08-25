import { RxCross2 } from 'react-icons/rx';

// eslint-disable-next-line react/prop-types
const BookDetailsModal = ({ open, setOpen, description }) => {
    
    return (
        <div
            className="h-screen w-full fixed top-0 left-0 z-40 bg-black/50 flex justify-center items-center"
        >
            <div
                className="relative h-[80%] w-4/12 mx-auto space-y-5 p-6 overflow-y-auto bg-white rounded-2xl"
            >
                <RxCross2
                    onClick={() => setOpen(!open)}
                    size={25}
                    className='absolute top-2 right-2 cursor-pointer'
                />
                <div  dangerouslySetInnerHTML={{__html : description}}></div>
            </div>
        </div>
    );
};

export default BookDetailsModal;