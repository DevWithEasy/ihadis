import image from '../assets/images/home-logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { FiBookOpen } from 'react-icons/fi'
import { BsBookmark, BsSend } from 'react-icons/bs'
import { BiDonateBlood, BiSearch } from 'react-icons/bi'
import { PiDotsNineBold, PiMoonStarsLight, PiBooksLight } from 'react-icons/pi'
import { useState } from 'react'
import GoToModal from '../component/GoToModal'
import useHadithStore from '../store/useStore'
import MenuPopup from '../component/MenuPopup'
import NavigationFooter from '../component/NavigationFooter'
import BookSearchModal from '../component/book/BookSearchModal'
import { book, bookmark, home, subject } from '../utils/images'
import { IoSunnyOutline } from 'react-icons/io5'

const Layout = ({ children }) => {
    const navigate = useNavigate()
    const { books } = useHadithStore()
    const [open, setOpen] = useState(false)
    const [menu, setMenu] = useState(false)
    const [view, setView] = useState(false)
    const [query, setQuery] = useState('')
    const [dark, setDark] = useState(false)

    const darkHandler = () => {
        if (dark) {
            const root = window.document.documentElement;
            root.classList.remove('dark')
            setDark(false)
        } else {
            const root = window.document.documentElement;
            root.classList.add('dark')
            setDark(true)
        }
    }
    const links = [
        {
            path: '/',
            icon: home
        },
        {
            path: '/allhadiths',
            icon: book
        },
        {
            path: '/hadith/subject/category',
            icon: subject
        },
        {
            path: '/bookmark',
            icon: bookmark
        },
    ]

    const searchHadith = async (e) => {
        e.preventDefault()
        try {
            navigate(`/search/?q=${query}`)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div
            className="h-screen flex bg-white dark:bg-slate-600"
        >
            <div
                className='fixed top-0 left-0 w-full p-4 flex justify-between z-10 bg-white rorder-b shadow md:shadow-none dark:bg-slate-600 dark:text-white'
            >
                <h1
                    className='flex items-center space-x-4'
                >
                    <img
                        src={image} alt="logo"
                        className='w-10 h-10'
                    />
                    <Link
                        to='/allhadiths'
                        className='text-xl'
                    >
                        হাদিস গ্রন্থসমূহ
                    </Link>
                </h1>
                <div
                    className='flex justify-end items-center space-x-2 md:space-x-6'
                >
                    <form
                        onSubmit={searchHadith}
                        className='hidden md:flex justify-between items-center space-x-2 px-3 border-2 rounded-lg dark:border-gray-500'
                    >
                        <BiSearch
                            className='text-gray-500 dark:text-white'
                        />
                        <input
                            type='text'
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Search Hadith'
                            className='py-3 font-light text-sm focus:outline-none dark:bg-slate-600'
                        />
                    </form>
                    <BiSearch
                        size={30}
                        onClick={() => setView(!view)}
                        className="md:hidden bg-gray-200 p-2 rounded cursor-pointer dark:bg-slate-700 dark:text-gray-300"
                    />
                    {dark ?
                        <PiMoonStarsLight
                        size={30}
                        onClick={darkHandler}
                        className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700 dark:text-gray-300"
                    />
                    :
                    <IoSunnyOutline
                        size={30}
                        onClick={darkHandler}
                        className="bg-gray-200 p-1 rounded cursor-pointer dark:bg-slate-700 dark:text-gray-300"
                    />
                    }
                </div>
            </div>
            <div
                className="relative hidden w-24 mt-20 p-4 pb-32 md:flex flex-col justify-between items-center dark:text-gray-300"
            >
                <NavLink
                    to='/'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <AiOutlineHome
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/allhadiths'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <FiBookOpen
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/hadith/subject/category'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <PiBooksLight
                        size={28}
                    />
                </NavLink>
                <NavLink
                    to='/bookmark'
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <BsBookmark
                        size={28}
                    />
                </NavLink>
                <button
                    onClick={() => setMenu(!menu)}
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <PiDotsNineBold
                        size={28}
                    />

                </button>
                <button
                    onClick={() => setOpen(!open)}
                    className='p-4 hover:bg-gray-100 hover:text-black rounded-xl'
                >
                    <BsSend
                        size={28}
                    />
                </button>
                <NavLink
                    to='/donate'
                    className='absolute left-0 bottom-3 translate-x-1/4 p-4 bg-[#2b9e76] text-white rounded-xl'
                >
                    <BiDonateBlood
                        size={28}
                    />
                </NavLink>
            </div>
            <NavigationFooter {...{ open, setOpen }} />
            <div
                className="relative w-full bg-gray-100 md:rounded-tl-3xl pt-[65px] md:mt-[80px] md:p-4 dark:bg-slate-700"
            >
                {children}

                {menu &&
                    <MenuPopup {...{ menu, setMenu }} />
                }
            </div>
            {open &&
                <GoToModal {...{ open, setOpen, books }} />
            }
            {view &&
                <BookSearchModal {...{ view, setView }} />
            }
        </div>
    );
};

export default Layout;