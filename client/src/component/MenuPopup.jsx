import { FaUser } from 'react-icons/fa'
import { PiNoteFill } from 'react-icons/pi'
import { BsFillFileCheckFill } from 'react-icons/bs'
import { CgWorkAlt } from 'react-icons/cg'
import { BiSolidDonateBlood } from 'react-icons/bi'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const MenuPopup = ({ menu, setMenu }) => {
    return (
        <div
            className="absolute top-5 w-3/12 space-y-5 py-6 bg-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.05)] rounded-xl"
        >
            <div>
                <Link
                    to='/privacy'
                    onClick={()=>setMenu(!menu)}
                    className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-50'
                >
                    <PiNoteFill
                        size={20}
                        className='text-[#2b9e76]'
                    />
                    <span>
                        প্রাইভেসি পলিসি
                    </span>
                </Link>
                <Link
                    to='/tahkik'
                    onClick={()=>setMenu(!menu)}
                    className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-50'
                >
                    <BsFillFileCheckFill
                        size={20}
                        className='text-[#2b9e76]'
                    />
                    <span>
                        তাহকিক
                    </span>
                </Link>
                <Link
                    to='/writers'
                    onClick={()=>setMenu(!menu)}
                    className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-50'
                >
                    <FaUser
                        size={20}
                        className='text-[#2b9e76]'
                    />
                    <span>
                        লেখক পরিচিতি
                    </span>
                </Link>
            </div>
            <div>
                <h3
                    className='mx-6 mb-2 border-b font-medium'
                >
                    ডাউনলোড
                </h3>
                <Link
                    to='/projects'
                    onClick={()=>setMenu(!menu)}
                    className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-50'
                >
                    <CgWorkAlt
                        size={20}
                        className='text-[#2b9e76]'
                    />
                    <span>
                        অন্যান্য প্রজেক্টসমুহ
                    </span>
                </Link>
            </div>
            <div>
                <h3
                    className='mx-6 mb-2 border-b font-medium'
                >
                    সাপোর্ট করুন অথবা যোগাযোগ করুন
                </h3>
                <Link
                    to='/donate'
                    onClick={()=>setMenu(!menu)}
                    className='flex items-center space-x-2 px-4 py-2 hover:bg-gray-50'
                >
                    <BiSolidDonateBlood
                        size={20}
                        className='text-[#2b9e76]'
                    />
                    <span>
                        সাপোর্ট করুন
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default MenuPopup;