import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookHeader, BookList, ChapterList, HadithList, HadithListSkalaton } from '../../component/Index';
import useHadithStore from "../../store/useStore";
import apiUrl from "../../utils/apiUrl";

// eslint-disable-next-line react/prop-types
const Chapter = () => {
    const { books, chapters } = useHadithStore()
    const { name, chapterId } = useParams()
    const [state, setState] = useState('chapter')
    const [book] = useState(books.find(book => book.book_name === name))
    const [chapter, setChapter] = useState(chapters.find(chapter => chapter.chapter_id == chapterId))
    const [hadiths, setHadiths] = useState([])
    const [loading, setLoading] = useState(false)

    const getHadiths = async (bookId, chapterId) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/book/hadith/${bookId}/${chapterId}`)
            if (res.data.status === 200) {
                setHadiths(res.data.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleChapterChange = (id) => {
        const findChapter = chapters.find(chapter => chapter.chapter_id === id)
        setChapter(findChapter)
    }

    useEffect(() => {
        chapter?.chapter_id && getHadiths(book?.id, chapter?.chapter_id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chapter?.chapter_id])

    return (
        <div
            className="h-full flex justify-between p-2 md:p-0 md:space-x-6"
        >
            <div className="hidden w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
                <BookHeader {...{ state, setState }} />
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <BookList {...{ handleChange: handleChapterChange }} />
                        :
                        <ChapterList {...{ name, page: 'chapter', handleChange: handleChapterChange }} />
                    }

                </div>
            </div>

            {loading ?
                <HadithListSkalaton />
                :
                <HadithList {...{
                    name,
                    state, 
                    setState,
                    book, 
                    chapter, 
                    hadiths,
                    page: 'chapter', 
                    handleChange: handleChapterChange
                }} 
                />
            }

        </div>
    );
};

export default Chapter;