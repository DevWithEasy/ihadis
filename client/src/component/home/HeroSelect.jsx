import { MdCheckBoxOutlineBlank,MdOutlineCheckBox  } from "react-icons/md";

const HeroSelect = ({ open, setOpen,data,id,setId }) => {
    return (
        <div
            className='w-full absolute left-0 top-12 bg-white h-52 md:h-40 border rounded-lg shadow-md z-10 dark:bg-slate-600'
        >
            <div
                className='h-full px-4 py-2 text-sm overflow-y-auto'
            >
                {data &&
                    data.map(book => 
                        <div 
                            key={book._id}
                            onClick={()=>setId(book.id)}
                            className="w-full p-2 flex items-center space-x-3 hover:bg-gray-100 hover:rounded-md cursor-pointer dark:hover:bg-slate-700"
                        >
                            {
                                id === book.id ? 
                                <MdOutlineCheckBox/> :
                                <MdCheckBoxOutlineBlank/>
                            }
                            <span>{book.title}</span>
                        </div>
                    )
                }
            </div>
            <div
                className='w-full px-4 py-2 absolute left-0 bottom-0 flex justify-between bg-gray-100 text-sm border-t rounded-b-lg dark:bg-slate-600'
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