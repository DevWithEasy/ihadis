import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import useHadithStore from '../../store/useStore';
import axios from 'axios'
import apiUrl from '../../utils/apiUrl';
import CatHeader from '../../component/subject/CatHeader';
import CatList from '../../component/subject/CatList';
import SubCatList from '../../component/subject/SubCatList';
import { ChaptersSkalaton } from '../../component/Index';
import SubCatsList from '../../component/subject/SubCatsList';

const Subject = () => {
    const { categories, addCategoriesSub } = useHadithStore()
    const { id } = useParams()
    const [state, setState] = useState('book')
    const [category, setCategory] = useState(categories.find(category => category.id == id))
    const [loading, setLoading] = useState(false)
    const getChapters = async (id) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/subject/${id}`)
            if (res.data.status === 200) {
                addCategoriesSub(res.data.data)
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    const handleBookChange = (id) => {
        const findCategory = categories.find(category => category.id == id)
        setCategory(findCategory)
    }
    useEffect(() => {
        getChapters(category.id)
    }, [category.id])

    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6 dark:px-0"
        >
            <div className="hidden md:w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
                <CatHeader {...{state, setState}}/>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <CatList {...{ handleChange: handleBookChange }} />
                        :
                        <SubCatList {...{ id, page: 'book', handleChange: handleBookChange }} />
                    }
                </div>
            </div>
            {loading ?
                <ChaptersSkalaton/>
                :
                <SubCatsList {...{id,category, state, setState,}}/>
            }
        </div>
    );
};

export default Subject;