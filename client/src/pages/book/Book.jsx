import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookHeader, BookList, ChapterList, ChaptersList, ChaptersSkalaton } from '../../component/Index';
import useHadithStore from "../../store/useStore";
import apiUrl from "../../utils/apiUrl";

// eslint-disable-next-line react/prop-types
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [book.id])


    return (
        <div
            className="h-full flex justify-between space-x-6"
        >
            <div className="w-[450px] h-full flex flex-col justify-between bg-white rounded-2xl">
                <BookHeader {...{state,setState}}/>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <BookList {...{ handleChange : handleBookChange }} />
                        :
                        <ChapterList {...{ name ,page : 'book', handleChange : handleBookChange }} />
                    }

                </div>
            </div>
            {loading ?
                <ChaptersSkalaton />
                :
                <ChaptersList {...{ name, book }} />
            }


        </div>
    );
};

export default Book;