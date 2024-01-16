import React, { useEffect, useState } from 'react';
import apiUrl from '../utils/apiUrl';
import axios from 'axios';
import useHadithStore from '../store/useStore';
import { useParams } from 'react-router-dom';
import { BookHeader, BookList, ChapterList, HadithListSkalaton } from '../component/Index';
import HadithFind from '../component/book/HadithFind';

const GotoHadith = () => {
    const { books, addChapters } = useHadithStore()
    const { name,id } = useParams()
    const [state, setState] = useState('book')
    const [book, setBook] = useState(books.find(book => book.book_name == name))
    const [data,setData] = useState({})
    const [loading, setLoading] = useState(false)
    const getChapters = async (id) => {
        try {
            const res = await axios.get(`${apiUrl}/api/book/chapter/${id}`)
            if (res.data.status === 200) {
                addChapters(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getHadith = async (bookId,hadithId) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/book/hadith/find/${bookId}/${hadithId}`)
            if (res.data.status === 200) {
                setData(res.data.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleBookChange = (name) => {
        const findbook = books.find(book => book.book_name === name)
        setBook(findbook)
    }
    useEffect(() => {
        getHadith(book.id,id)
        getChapters(book.id)
    }, [book.id,id])


    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6"
        >
            <div className="hidden md:w-[450px] h-full md:flex flex-col justify-between bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
                <BookHeader {...{ state, setState }} />
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <BookList {...{ handleChange: handleBookChange }} />
                        :
                        <ChapterList {...{ name, page: 'book', handleChange: handleBookChange }} />
                    }
                </div>
            </div>

            {loading ?
                <HadithListSkalaton/>
                :
                <HadithFind {...{...data,book}}/>
            }
        </div>
    );
};

export default GotoHadith;