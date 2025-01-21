import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookHeader, BookList, ChapterList, ChaptersList, ChaptersSkalaton } from '../../component/Index';
import useHadithStore from "../../store/useStore";
import apiUrl from "../../utils/apiUrl";

const Book = () => {
    const { books, addChapters } = useHadithStore()
    const { name } = useParams()
    const [state, setState] = useState('book')
    const [book, setBook] = useState(books.find(book => book.book_name == name))
    const [loading, setLoading] = useState(false)
    const getChapters = async (id) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/book/chapter/${id}`)
            if (res.data.status === 200) {
                addChapters(res.data.data)
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
        getChapters(book.id)
    }, [book.id])


    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6 dark:px-0"
        >
            <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
                <BookHeader {...{ state, setState }} />
                <div
                    className="p-2 h-[cal(100%-120px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <BookList {...{ handleChange: handleBookChange }} />
                        :
                        <ChapterList {...{ name, page: 'book', handleChange: handleBookChange }} />
                    }

                </div>
            </div>

            {loading ?
                <ChaptersSkalaton />
                :
                <ChaptersList {...{
                    name,
                    book, 
                    state, 
                    setState,
                    page: 'book',
                    handleChange: handleBookChange
                }} />
            }

        </div>
    );
};

export default Book;