import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HadithListSkalaton } from '../../component/Index';
import CatHadithList from '../../component/subject/CatHadithList';
import CatHeader from '../../component/subject/CatHeader';
import CatList from '../../component/subject/CatList';
import SubCatList from '../../component/subject/SubCatList';
import useHadithStore from '../../store/useStore';
import apiUrl from '../../utils/apiUrl';

const CategoiesHadith = () => {
    const { categories, categoriesSub } = useHadithStore()
    const { catId, id } = useParams()
    const [state, setState] = useState('chapter')
    const [category] = useState(categories.find(category => category.id == catId))
    const [categorySub, setCategorySub] = useState(categoriesSub.find(categorySub => categorySub.id == id))
    const [hadiths, setHadiths] = useState([])
    const [loading, setLoading] = useState(false)

    const getHadiths = async (catId, subCatId) => {
        setLoading(true)
        try {
            const res = await axios.get(`${apiUrl}/api/subject/${catId}/${subCatId}`)
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
        const findcategorySub = categoriesSub.find(categorySub => categorySub.id == id)
        setCategorySub(findcategorySub)
    }

    useEffect(() => {
        categorySub?.id && getHadiths(category?.id, categorySub?.id)
    }, [categorySub?.id])
    
    
    return (
        <div
            className="px-2 h-full flex justify-between md:space-x-6"
        >
            <div className="hidden w-[450px] h-full md:flex flex-col bg-white rounded-2xl dark:bg-slate-600 dark:text-gray-300">
                <CatHeader {...{state, setState}}/>
                <div
                    className="p-2 h-[cal(100%-250px)] overflow-y-auto"
                >
                    {state === 'book' ?
                        <CatList {...{ handleChange: handleChapterChange }} />
                        :
                        <SubCatList {...{ id, page: 'chapter', handleChange: handleChapterChange }} />
                    }
                </div>
            </div>
            {loading ?
                <HadithListSkalaton/>
                :
                <CatHadithList {...{
                    id,category,categorySub,state,setState, hadiths,handleChange :handleChapterChange
                }}/>
            }
        </div>
    );
};

export default CategoiesHadith;