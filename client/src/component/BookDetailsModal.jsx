import { RxCross2 } from 'react-icons/rx';

const BookDetailsModal = ({ open, setOpen, description }) => {
    
    return (
        <div
            className="h-screen w-full fixed -top-2 left-0 z-40 bg-black/50 flex justify-center items-center dark:bg-slate-700/50"
        >
            <div
                className="relative h-[80%] w-11/12 md:w-6/12 mx-auto space-y-5 p-6 overflow-y-auto bg-white rounded-2xl dark:bg-slate-600"
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