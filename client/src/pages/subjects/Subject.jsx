import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import useHadithStore from '../../store/useStore';

const Subject = () => {
    const { categories } = useHadithStore()
    const { id } = useParams()
    const [state, setState] = useState('book')
    const [category, setCategory] = useState(categories.find(category => category.id == id))
    const [loading, setLoading] = useState(false)
    // const getChapters = async (id) => {
    //     setLoading(true)
    //     try {
    //         const res = await axios.get(`${apiUrl}/api/book/chapter/${id}`)
    //         if (res.data.status === 200) {
    //             addChapters(res.data.data)
    //             setLoading(false)
    //         }
    //     } catch (error) {
    //         setLoading(false)
    //         console.log(error)
    //     }
    // }

    // const handleBookChange = (name) => {
    //     const findbook = categories.find(category => category.id == id)
    //     setCategory(findbook)
    // }
    // useEffect(() => {
    //     getChapters(book.id)
    // }, [book.id])
    
    console.log(category)
    return (
        <div>
            
        </div>
    );
};

export default Subject;